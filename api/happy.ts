const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
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
    return res.status(200).json({
      body: "OK",
    });
  }
  return await fn(req, res);
};

const handler = (req, res) => {
  if (req.method === "OPTIONS") {
    return res.status(200).json({
      body: "OK",
    });
  }

  const d = new Date();
  console.log(res.getHeaders());
  res.end(d.toString());
};

module.exports = allowCors(handler);
