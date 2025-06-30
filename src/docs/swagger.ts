// import swaggerJSDoc from "swagger-jsdoc";
import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

const swaggerOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Habit Tracker API",
      version: "1.0.0",
      description: "API for tracking habits, users, and habit logs.",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: "http://localhost:4000",
        description: "Development server",
      },
    ],
  },
  apis: [path.join(__dirname, "../routes/**/*.ts")],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
