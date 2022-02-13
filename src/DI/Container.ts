import {container} from "tsyringe";
import InjectionToken from "tsyringe/dist/typings/providers/injection-token";
import constructor from "tsyringe/dist/typings/types/constructor";

class Container {
    register = <T>(token: InjectionToken<T>, provider: constructor<T>) => {
        container.register(token, provider);
        return this;
    }
    registerSingleton = <T>(from: InjectionToken<T>, to: InjectionToken<T>) => {
        container.registerSingleton(from, to);
        return this;
    }
    resolve = <T>(token: InjectionToken<T>): T => {
        return container.resolve(token);
    }
}

const containerApp = new Container();

export function InstanceResolve<T>(token: InjectionToken<T>): T {
    return containerApp.resolve(token);
}

export default containerApp;
