// script/strapi-request.mjs
import fs from "fs";
import fetch from "node-fetch";

const STRAPI_URL = "http://localhost:1337/api/posts";

async function fetchPosts() {
  const res = await fetch(
    `${STRAPI_URL}?pagination[page]=1&pagination[pageSize]=100&sort[0]=publishedAt:desc&populate=*`
  );
  const data = await res.json();

  fs.writeFileSync("./data/posts.json", JSON.stringify(data, null, 2));
  console.log(`✅ Data berhasil di-export: ${data.data.length} posts`);
}

fetchPosts().catch(console.error);
