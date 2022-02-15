import HttpRequest from "@WebAPI/Http/HttpRequest";
import HttpResponse from "@WebAPI/Http/HttpResponse";
import {injectable} from "@DI/Decorator";
import {CategoryUseCase, CreateCategoryRequest} from "@Domain/UseCases/Category/CategoryUseCase";

@injectable()
export default class CategoryController {

    constructor(private categoryUseCase: CategoryUseCase){}

    list = (req: HttpRequest, resp: HttpResponse): void => {
        const response = this.categoryUseCase.list();
        resp.json(response);
    }

    create = (req: HttpRequest, resp: HttpResponse): void => {
        const {name} = req.body;
        const data = new CreateCategoryRequest(name);
        const response = this.categoryUseCase.create(data);
        resp.json(response);
    }
}