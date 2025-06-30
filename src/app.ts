import express from "express";
import cors from "cors";
import routes from "./routes";
import { errorGeneralHandler } from "./middlewares/errorGeneralHandler";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api", routes);

//Middleware handling errors
app.use(errorGeneralHandler);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
export default app;
