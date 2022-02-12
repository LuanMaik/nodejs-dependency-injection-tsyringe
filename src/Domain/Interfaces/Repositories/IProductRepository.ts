import Product from "@Domain/Entities/Product";

export default interface IProductRepository {
    list(): Product[];
    save(product: Product): Product;
}
