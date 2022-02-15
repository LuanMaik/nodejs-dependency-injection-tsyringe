import "reflect-metadata";
import registerDependencies from "@DI/DependenciesRegistration";
import MemoryCategoryRepository from "@Infrastructure/Database/Repositories/MemoryCategoryRepository";
import {CategoryUseCase, CreateCategoryRequest} from "@Domain/UseCases/Category/CategoryUseCase";

describe('Product UseCase', () => {

    let useCase: CategoryUseCase;

    beforeAll(() => {
        registerDependencies();
    })

    beforeEach(() => {
        useCase = new CategoryUseCase(new MemoryCategoryRepository());
    })

    it('should create new category', function () {
        // When
        const product = useCase.create(new CreateCategoryRequest('Mobile'));

        // Then
        expect(product).toMatchObject({id: 1, name: 'Mobile'});
    });

    it('should list categories', function () {
        // When
        const categories = useCase.list();

        // Then
        expect(categories).toHaveLength(1);
        expect(categories[0]).toHaveProperty('id');
        expect(categories[0]).toHaveProperty('name');
    });

})