import express from "express";
import cors from "cors";
import routes from "./routes";
import { errorGeneralHandler } from "./middlewares/errorGeneralHandler";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api", routes);

//Middleware handling errors
app.use(errorGeneralHandler);

export default app;
