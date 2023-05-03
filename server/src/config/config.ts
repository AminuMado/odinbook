import dotenv from "dotenv";

dotenv.config();

const MONGO_OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  socketTimeoutMS: 30000,
  keepAlive: true,
  poolSize: 50,
  autoIndex: false,
  retryWrites: false,
};
const DB_STRING = String(process.env.MONGODB_URI);

const MONGO = {
  options: MONGO_OPTIONS,
  url: DB_STRING,
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 4000;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};
const GOOGLE = {
  clientId: String(process.env.GOOGLE_CLIENT_ID),
  clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
};
const config = {
  mongo: MONGO,
  server: SERVER,
  google: GOOGLE,
};

export default config;
