import {container} from "tsyringe";
import {injectable, autoInjectable, singleton, inject} from "tsyringe";
import InjectionToken from "tsyringe/dist/typings/providers/injection-token";
import MemoryProductRepository from "@Infrastructure/Database/Repositories/MemoryProductRepository";
import {IProductRepository} from "@Domain/Interfaces/Repositories/IProductRepository";

export {
    injectable,
    autoInjectable,
    singleton,
    inject
}

export function InstanceFactory<T>(token: InjectionToken<T>): T {
    return container.resolve(token);
}


// DEPENDENCIES REGISTRATION

container.register(IProductRepository, MemoryProductRepository);
//container.register(IUserRepository, UserRepository);