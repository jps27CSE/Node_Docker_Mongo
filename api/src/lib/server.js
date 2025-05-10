import express from "express";
import config from "./config.js";

export const startServer = () => {
  const httpServer = express();
  const port = config.port;

  httpServer.get("/ping", (req, res) => {
    console.log(`Ping route: ${req.url} ${Date.now()}`);
    res.status(200).json({
      message: "Ping:test successfull",
    });
  });

  try {
    httpServer.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    throw new Error(err);
  }
};
