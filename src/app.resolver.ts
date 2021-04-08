import { Query, Resolver } from "@nestjs/graphql";


@Resolver()
export class AppResolver {
    @Query(() => String)
    helloWorld(): string {
        return "Hello world"
    }
}