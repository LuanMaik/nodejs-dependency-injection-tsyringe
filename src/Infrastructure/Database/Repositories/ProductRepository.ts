import Product from "@Domain/Entities/Product";

export default class ProductRepository {
    list = (): Product[] => {
        return [
            new Product("Iphone", 10000),
            new Product("Notebook", 5000),
            new Product("T-Shirt", 60),
        ];
    }

    save = (product: Product): Product => {
        return product;
    }
}