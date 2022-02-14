import {Express} from "express";
import {InstanceFactory} from "@DI/InstanceFactory";
import ProductController from "@WebAPI/Controllers/ProductController";
import CategoryController from "@WebAPI/Controllers/CategoryController";
import HttpRequest from "@WebAPI/Http/HttpRequest";
import HttpResponse from "@WebAPI/Http/HttpResponse";


export default function registerRoutes(app: Express) {

    app.get("/", (req: HttpRequest, resp: HttpResponse) => {
        resp.json({"message": "It Works!"});
    })

    // PRODUCT
    app.get("/product", (req: HttpRequest, resp: HttpResponse) => InstanceFactory(ProductController).list(req, resp))
    app.post("/product", (req: HttpRequest, resp: HttpResponse) => InstanceFactory(ProductController).create(req, resp))

    // CATEGORY
    app.get("/category", (req: HttpRequest, resp: HttpResponse) => InstanceFactory(CategoryController).list(req, resp))
    app.post("/category", (req: HttpRequest, resp: HttpResponse) => InstanceFactory(CategoryController).create(req, resp))
}