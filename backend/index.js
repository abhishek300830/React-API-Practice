import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

// initializing app
const app = express();

// importing routes
import postRoutes from "./Routes/routes.js";

//urlencoded
app.use(bodyParser.json({ limit: "30mb", extented: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extented: true }));
// port
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const dbname = "react-api-demo";
const connection_url = `mongodb://localhost:27017/${dbname}`;

// connecting mongoose

mongoose
  .connect(connection_url)
  .then(() => app.listen(PORT, () => console.log("connected to Database")))
  .catch((err) => console.log(err.message));

app.use("/", postRoutes);
