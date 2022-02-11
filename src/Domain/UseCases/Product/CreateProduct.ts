import Product from "@Domain/Entities/Product";
import ProductRepository from "@Infrastructure/Database/Repositories/ProductRepository";
import {injectable} from "@Core/DependencyInjection";

@injectable()
class CreateProduct {

    constructor(private productRepository: ProductRepository) {}

    handle = (request: CreateProductRequest): CreateProductResponse => {
        let product = new Product(request.name, request.price);
        product = this.productRepository.save(product);
        return new CreateProductResponse(
            product.getId(),
            product.getName(),
            product.getPrice())
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
    CreateProduct,
    CreateProductRequest,
    CreateProductResponse
}