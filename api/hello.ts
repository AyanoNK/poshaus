import type { VercelRequest, VercelResponse } from "@vercel/node";
import ytdl from "ytdl-core";
const fs = require("fs");

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const info = ytdl.getInfo("dQw4w9WgXcQ");

  response.status(200).json({
    response: info,
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}