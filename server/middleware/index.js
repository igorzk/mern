import express from "express";

export default app => {
    app.use(express.static("client/public/"));
    app.use(express.json());
};
