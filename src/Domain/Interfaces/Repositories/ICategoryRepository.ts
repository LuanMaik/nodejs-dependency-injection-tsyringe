import Category from "@Domain/Entities/Category";

export interface ICategoryRepository {
    list(): Category[];
    save(category: Category): Category;
}

export const ICategoryRepository = Symbol("ICategoryRepository");