import type { VercelRequest, VercelResponse } from "@vercel/node";
import ytdl from "ytdl-core";
const fs = require("fs");

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const info = await ytdl.getInfo("dQw4w9WgXcQ");

  response.status(200).json({
    body: info,
    query: request.query,
    cookies: request.cookies,
  });
}
