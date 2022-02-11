import Product from "@Domain/Entities/Product";


export default abstract class IProductRepository {
    abstract list(): Product[];
    abstract save(product: Product): Product;
}
