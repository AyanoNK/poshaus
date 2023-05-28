import type { VercelRequest, VercelResponse } from "@vercel/node";
import ytdl from "ytdl-core";

const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

async function handler(request: VercelRequest, response: VercelResponse) {
  const id: string | string[] = request.query.id;

  if (!id || Array.isArray(id) || typeof id !== "string")
    return response.status(400).json({
      error: "No url provided",
    });

  const r = await ytdl.getInfo(id).catch((e) => {
    console.error(e);
    return {
      formats: [],
    };
  });

  if (!r.formats || !Array.isArray(r.formats))
    return response.status(400).json({
      error: "No formats found",
    });

  const audios = r.formats.filter((f) => f.mimeType?.includes("audio"));
  const maxBitrateAudio = audios.reduce((accumulator, current) => {
    if (
      accumulator.bitrate &&
      current.bitrate &&
      accumulator.bitrate > current.bitrate
    )
      return accumulator;
    else return current;
  });

  console.log(maxBitrateAudio);

  response.status(200).json({
    url: maxBitrateAudio ? maxBitrateAudio.url : null,
  });
}

module.exports = allowCors(handler);
