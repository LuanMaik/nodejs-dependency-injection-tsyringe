import Product from "@Domain/Entities/Product";

export interface IProductRepository {
    list(): Product[];
    save(product: Product): Product;
}

export const IProductRepository = Symbol("IProductRepository");