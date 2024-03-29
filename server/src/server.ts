import http from "http";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import logging from "./config/logging";
import config from "./config/config";
import postRoutes from "./routes/post";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/user";
import { connectDB } from "./middleware/connectDB";
import cookieSession from "cookie-session";
import passport from "passport";
import cors from "cors";
import "./config/passport-config";

const NAMESPACE = "Server";
const app = express();
const httpServer = http.createServer(app);

const listenToServer = () => {
  httpServer.listen(config.server.port, () => {
    logging.info(
      NAMESPACE,
      `⚡️Server is running at ${config.server.hostname}:${config.server.port}`
    );
  });
};
/** cors */
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
/** Set Up cookieSession */
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.cookie.key],
  })
);

/** Initialize Passport */
app.use(passport.initialize());
app.use(passport.session());

/** Connect to Mongo */
connectDB(() => listenToServer());

/** Log the request */
app.use((req, res, next) => {
  /** Log the req */
  logging.info(
    NAMESPACE,
    `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );

  res.on("finish", () => {
    /** Log the res */
    logging.info(
      NAMESPACE,
      `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`
    );
  });

  next();
});

/** Parse the body of the request */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Rules of our API */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

/** Routes go here */
app.use("/api/post", postRoutes);
app.use("/api/user", userRoutes);
app.use("/auth", authRoutes);
// Index page at default entry route
app.route("/").get((req: Request, res: Response) => {
  console.log(process.cwd());
  res.sendFile(process.cwd() + "/src/index.html");
});
/** Error handling */
app.use((req, res, next) => {
  const error = new Error("Not found");

  res.status(404).json({
    message: error.message,
  });
});
