import HttpRequest from "@WebAPI/Http/HttpRequest";
import HttpResponse from "@WebAPI/Http/HttpResponse";
import {ProductUseCase, CreateProductRequest} from "@Domain/UseCases/Product/ProductUseCase";
import {injectable} from "@DI/Decorator";

@injectable()
export default class ProductController {

    constructor(private productUseCase: ProductUseCase){
        //console.log("ProductController::constructor")
    }

    list = (req: HttpRequest, resp: HttpResponse): void => {
        const response = this.productUseCase.list();
        resp.json(response);
    }

    create = (req: HttpRequest, resp: HttpResponse): void => {
        const {name, price} = req.body;
        const data = new CreateProductRequest(name, price);
        const response = this.productUseCase.create(data);
        resp.json(response);
    }
}