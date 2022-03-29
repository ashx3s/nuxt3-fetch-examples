import * as url from "url";

export default async (req, res) => {
  // this returns as an object
  // the goal is to return what you want to search
  const queryObject = url.parse(req.url, true).query;
  let data = { data: [{ data: "" }] };
  const { search } = queryObject;

  // Use the Nuxt built in fetch syntax
  if (search) {
    data = await $fetch(`https://api.disneyapi.dev/characters/`);
  }
  // after retrieving data, search and return by name
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(data));
  res.end();
};
