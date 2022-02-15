import "reflect-metadata";
import MemoryProductRepository from "@Infrastructure/Database/Repositories/MemoryProductRepository";
import {CreateProductRequest, ProductUseCase} from "@Domain/UseCases/Product/ProductUseCase";
import registerDependencies from "@DI/DependenciesRegistration";

describe('Product UseCase', () => {

    let useCase: ProductUseCase;

    beforeAll(() => {
        registerDependencies();
    })

    beforeEach(() => {
        useCase = new ProductUseCase(new MemoryProductRepository());
    })

    it('should create new product', function () {
        // When
        const product = useCase.create(new CreateProductRequest('IMac', 15000));

        // Then
        expect(product).toMatchObject({id: 1, name: 'IMac', price: 15000});
    });

    it('should list products', function () {
        // When
        const products = useCase.list();

        // Then
        expect(products).toHaveLength(3);
        expect(products[0]).toHaveProperty('id');
        expect(products[0]).toHaveProperty('name');
        expect(products[0]).toHaveProperty('price');
    });

})