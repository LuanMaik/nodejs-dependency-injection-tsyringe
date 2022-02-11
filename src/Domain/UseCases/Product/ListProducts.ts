import {injectable} from "@Core/DependencyInjection";
import ProductRepository from "@Infrastructure/Database/Repositories/ProductRepository";
import Product from "@Domain/Entities/Product";

@injectable()
class ListProductsHandler {

    constructor(private productRepository: ProductRepository) {}

    handle = (): Product[] => {
        return this.productRepository.list();
    }
}

export {
    ListProductsHandler
}