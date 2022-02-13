import "reflect-metadata";
import express from "express";
import ProductController from "@WebAPI/Controllers/ProductController";
import {InstanceFactory} from "@DI/InstanceFactory";
import CategoryController from "@WebAPI/Controllers/CategoryController";
import registerDependencies from "@DI/DependenciesRegistration";

registerDependencies();

const app = express();
app.use(express.json());


app.get("/", (req, resp) => {
    resp.json({"message": "It Works!"});
})

app.get("/product", InstanceFactory(ProductController).list)
app.post("/product", InstanceFactory(ProductController).create)

app.get("/category", InstanceFactory(CategoryController).list)
app.post("/category", InstanceFactory(CategoryController).create)

export default app;