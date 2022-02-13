import InjectionToken from "tsyringe/dist/typings/providers/injection-token";
import {container} from "tsyringe";

export function InstanceFactory<T>(token: InjectionToken<T>): T {
    return container.resolve(token);
}
