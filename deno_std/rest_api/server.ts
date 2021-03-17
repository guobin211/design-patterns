import { Application } from "../mod.ts";
import router from "./router.ts";

const HOST = "127.0.0.1";
const PORT = 7700;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

const url = `${HOST}:${PORT}`;
console.log(`Listening on http://${url}/books`);
await app.listen(`${url}`);
