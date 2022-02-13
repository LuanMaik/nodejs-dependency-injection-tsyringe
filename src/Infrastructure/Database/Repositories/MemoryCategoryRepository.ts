import {ICategoryRepository} from "@Domain/Interfaces/Repositories/ICategoryRepository";
import Category from "@Domain/Entities/Category";

export default class MemoryCategoryRepository implements ICategoryRepository{
    list = (): Category[] => {
        return [
            new Category("Eletronic"),
        ];
    }

    save = (category: Category): Category => {
        return category;
    }
}