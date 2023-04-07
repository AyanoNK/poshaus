import ytdl from "ytdl-core";

export const config = {
  runtime: "edge",
};
export default async (request: Request) => {
  const info = await ytdl.getInfo("dQw4w9WgXcQ");
  console.log(info);
  new Response(`Hello, from ${request.url} I'm now an Edge Function!`);
};
