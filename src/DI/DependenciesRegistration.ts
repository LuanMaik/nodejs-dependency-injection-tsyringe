import containerApp from "@DI/Container";
import {IProductRepository} from "@Domain/Interfaces/Repositories/IProductRepository";
import {ICategoryRepository} from "@Domain/Interfaces/Repositories/ICategoryRepository";
import MemoryProductRepository from "@Infrastructure/Database/Repositories/MemoryProductRepository";
import MemoryCategoryRepository from "@Infrastructure/Database/Repositories/MemoryCategoryRepository";

export default function registerDependencies() {
    containerApp.register(IProductRepository, MemoryProductRepository)
    containerApp.register(ICategoryRepository, MemoryCategoryRepository)
}