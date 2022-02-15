import {inject, injectable} from "@DI/Decorator";
import Category from "@Domain/Entities/Category";
import {ICategoryRepository} from "@Domain/Interfaces/Repositories/ICategoryRepository";

@injectable()
class CategoryUseCase {

    constructor(@inject(ICategoryRepository) private categoryRepository: ICategoryRepository){}

    create = (request: CreateCategoryRequest): CreateCategoryResponse => {
        let category = new Category(request.name);
        category = this.categoryRepository.save(category);
        return new CreateCategoryResponse(
            category.getId(),
            category.getName())
    }


    list = (): Category[] => {
        return this.categoryRepository.list();
    }
}

class CreateCategoryRequest {
    constructor(
        public readonly name: string,
    ) { }
}

class CreateCategoryResponse {
    constructor(
        public readonly id: number,
        public readonly name: string,
    ) { }
}

export {
    CategoryUseCase,
    CreateCategoryRequest,
    CreateCategoryResponse
}