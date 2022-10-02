import express from "express";

const api = express.Router();

api.get("/", (_, res) => res.json({ status: "ok" }));

export default api;
