import type { VercelRequest, VercelResponse } from "@vercel/node";
import ytdl from "ytdl-core";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const url = request.body.url as string;

  if (!url)
    return response.status(400).json({
      error: "No url provided",
    });

  const maxBitrateAudio = await ytdl
    .getInfo(url)
    .then((info) => {
      return info.formats
        .filter((f) => f.mimeType?.includes("audio"))
        .reduce((accumulator, current) => {
          if (
            accumulator.bitrate &&
            current.bitrate &&
            accumulator.bitrate > current.bitrate
          )
            return accumulator;
          else return current;
        });
    })
    .catch(() => null);

  response.status(200).json({
    body: { url: maxBitrateAudio ? maxBitrateAudio.url : null },
    query: request.query,
    cookies: request.cookies,
  });
}
