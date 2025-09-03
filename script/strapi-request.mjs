// script/strapi-request.mjs

import { writeFileSync } from "fs";

const url = "http://localhost:1337/api/posts" + "?populate=*";

const response = await fetch (url);

const body = await response.json();

const posts = JSON.stringify(body, null, 2);

// console.log(posts);

const file = "script/strapi-response.json";

writeFileSync(file, posts, "utf8");