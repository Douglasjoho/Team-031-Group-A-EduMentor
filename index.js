import express from "express";
import path from "path";
import loader from "./api/loaders";
import config from "./api/config";
import Database from "./api/config/dbConnection";
import logger from "./api/config/winstonlog";


// initialize new express app
const app = express();

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

console.log(process.env);
app.use(cors());
app.use(express.json());
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false }))
// Get all tutors
const tutors= require('./tutors');

// Get all students
const students= require('./students');

// To use other UI routes
app.use("/tutors",tutors);
app.use("students",students);


app.use((err, req, res, next) => {
  logger.info(err.stack);
  res.status(500);
  res.render("There was an Error processing your request. Something\"s broken! Check your data and try again", { error: err });
  next();
});

const hostname = process.env.HOST;
const port = process.env.PORT;
app.listen(port, hostname, (e) => {
  if (e) { logger.info(e); } else { logger.info(`listening at http://${hostname}:${port}`); }
});
