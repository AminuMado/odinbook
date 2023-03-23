import express, { Request, Response, Application, NextFunction } from "express";
import { config } from "dotenv";
import postRoutes from "./routes/posts";
import { connectDB } from "./middleware/connectDB";
// Loads .env file contents into process.env.
config();

const app: Application = express();
const PORT: Number = Number(process.env.PORT);
const listenToServer = () => {
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
};

// connect to Mongodb
connectDB(() => listenToServer());
//middleware
app.use(express.json());
// Routes
app.use("/api/posts", postRoutes);
// Index page at default entry route
app.route("/").get((req: Request, res: Response) => {
  console.log(process.cwd());
  res.sendFile(process.cwd() + "/src/index.html");
});
