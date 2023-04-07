import type { VercelRequest, VercelResponse } from "@vercel/node";
import ytdl from "ytdl-core";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const id = request.query.id as string;

  if (!id)
    return response.status(400).json({
      error: "No url provided",
    });

  const maxBitrateAudio = await ytdl
    .getInfo(id)
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
    url: maxBitrateAudio ? maxBitrateAudio.url : null,
    body: maxBitrateAudio ? maxBitrateAudio.url : null,
    query: request.query,
    cookies: request.cookies,
  });
}
