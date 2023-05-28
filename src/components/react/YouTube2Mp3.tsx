import React, { useEffect } from "react";

export default function YouTube2Mp3() {
  const [url, setUrl] = React.useState<string>("");

  useEffect(() => {
    if (url !== "") window.open(url, "_blank");
  }, [url]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const url = data.get("url").toString();
    const regex =
      /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    const match = url.match(regex)[1];
    const response = await fetch(
      `https://poshaus.art/api/getyturl?id=${match}`
    ).then((res) => res.json());

    console.log(response);
    setUrl(response.url);
  };

  return (
    <div className="pt-10 px-10 flex flex-col items-center justify-center">
      <h1 className="uppercase text-7xl font-black">YouTube to MP3</h1>

      <div className="grid grid-cols-1 gap-5 pt-5">
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
          Input your amazing
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white">Link</span>
          </span>
          and transform it to MP3
        </blockquote>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="flex flex-col items-end justify-end">
            <input
              type="url"
              name="url"
              id="url"
              className="peer px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
              placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid YouTube URL.
            </p>
            <div>
              <button
                type="submit"
                className="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 my-2 text-sm leading-5 rounded-md font-semibold text-white"
              >
                Save changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
