import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    entry: "./client/src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "client", "public"),
    },
};
