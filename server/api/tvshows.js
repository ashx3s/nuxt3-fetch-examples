import * as url from "url";

export default async (req, res) => {
  const queryObject = url.parse(req.url, true).query;

  let data = { data: [{ data: "" }] };

  const { search } = queryObject;

  if (search) {
    data = await $fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(data));
  res.end();
};
