//Importing project dependancies that we installed earlier
import dotenv from "dotenv";
import express from "express";
import { validateEnv } from "./validateEnv";

dotenv.config();
validateEnv();

//intializing the express app
const app = express();

//using the dependancies
app.use(express.json());

export { app };
