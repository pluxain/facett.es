//Importing project dependancies that we installed earlier
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { validateEnv } from "./validateEnv";

config();
validateEnv();

//intializing the express app
const app = express();

//using the dependancies
app.use(helmet());
app.use(cors());
app.use(express.json());

export { app };
