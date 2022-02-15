import InjectionToken from "tsyringe/dist/typings/providers/injection-token";
import Container from "@DI/Container";

export function InstanceFactory<T>(token: InjectionToken<T>): T {
    return Container.resolve(token);
}
