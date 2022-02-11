import {InstanceFactory} from "@Core/DependencyInjection";
import {CreateProduct, CreateProductRequest} from "@Domain/UseCases/Product/CreateProduct";
import HttpRequest from "@WebAPI/Http/HttpRequest";
import HttpResponse from "@WebAPI/Http/HttpResponse";
import {ListProductsHandler} from "@Domain/UseCases/Product/ListProducts";

export default class ProductController {

    list = (req: HttpRequest, resp: HttpResponse): void => {
        const listProductsHandler = InstanceFactory(ListProductsHandler);
        const response = listProductsHandler.handle();
        resp.json(response);
    }

    create = (req: HttpRequest, resp: HttpResponse): void => {
        const {name, price} = req.body;
        const data = new CreateProductRequest(name, price);
        const createProductUseCase = InstanceFactory(CreateProduct);
        const response = createProductUseCase.handle(data);
        resp.json(response);
    }
}