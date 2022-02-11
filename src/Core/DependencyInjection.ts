import {container} from "tsyringe";
import {injectable, autoInjectable, singleton} from "tsyringe";
import InjectionToken from "tsyringe/dist/typings/providers/injection-token";

export {
    injectable,
    autoInjectable,
    singleton
}

export function InstanceFactory<T>(token: InjectionToken<T>): T {
    return container.resolve(token);
}