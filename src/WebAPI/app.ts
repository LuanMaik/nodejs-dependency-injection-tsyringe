import "reflect-metadata";
import express from "express";
import registerRoutes from "@WebAPI/routes";
import registerDependencies from "@DI/DependenciesRegistration";

// Register Dependency Injection
registerDependencies();

const app = express();

app.use(express.json());

registerRoutes(app);

export default app;