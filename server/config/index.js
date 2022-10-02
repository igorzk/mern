import * as dotenv from "dotenv";

dotenv.config();

export const port = process.env.APP_PORT;
export const url = process.env.APP_URL;
