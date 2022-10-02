import express from "express";
import { port, url } from "./config/index.js";
import middleware from "./middleware/index.js";
import routes from "./routes/index.js";

const app = express();
middleware(app);
routes(app);

export default () =>
    app.listen(port, () => console.log(`Server started at: ${url}:${port}`));
