import Product from "@Domain/Entities/Product";
import {injectable, inject} from "@Core/DependencyInjection";
import IProductRepository from "@Domain/Interfaces/Repositories/IProductRepository";

@injectable()
class ProductUseCase {

    constructor(@inject("IProductRepository") private productRepository: IProductRepository) {}

    create = (request: CreateProductRequest): CreateProductResponse => {
        let product = new Product(request.name, request.price);
        product = this.productRepository.save(product);
        return new CreateProductResponse(
            product.getId(),
            product.getName(),
            product.getPrice())
    }


    list = (): Product[] => {
        return this.productRepository.list();
    }
}

class CreateProductRequest {
    constructor(
        public readonly name: string,
        public readonly price: number,
    ) { }
}

class CreateProductResponse {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly price: number,
    ) { }
}

export {
    ProductUseCase,
    CreateProductRequest,
    CreateProductResponse
}