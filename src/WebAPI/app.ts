import "reflect-metadata";
import express from "express";
import ProductController from "@WebAPI/Controllers/ProductController";
import {InstanceFactory} from "@Core/DependencyInjection";

const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
    resp.json({"message": "It Works!"});
})


app.get("/product", InstanceFactory(ProductController).list)
app.post("/product", InstanceFactory(ProductController).create)

export default app;