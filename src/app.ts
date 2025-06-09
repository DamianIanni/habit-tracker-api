import express from "express";
import { Request, Response, NextFunction } from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api", routes);

//Middleware handling errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.stack);
  res.status(500).json({ error: "something went wrog" });
});

export default app;
