import express, { Request, Response, Application, NextFunction } from "express";
import { Server } from "http";
import { config } from "dotenv";
// Loads .env file contents into process.env.
config();

const app: Application = express();
const port: Number = Number(process.env.PORT);

const server: Server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// Index page at default entry route
app.route("/").get((req: Request, res: Response) => {
  res.sendFile(process.cwd() + "/index.html");
});
