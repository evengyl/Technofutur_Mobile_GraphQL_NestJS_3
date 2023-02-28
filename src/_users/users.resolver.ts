import { Args, Int, Mutation, Parent, Query, Resolver } from "@nestjs/graphql";
import { CreateUser, UpdateUser, Users } from "src/shared/graphql/users.schema";
import { UsersService } from "./users.service";

@Resolver()
export class UsersResolver{

    constructor(
        private readonly userServe : UsersService
    ){}

    @Query(() => [Users])
    async allUsers()
    {
        return this.userServe.getAllUser()    
    }

    @Query(() => Users)
    async oneUser(@Args('userId') userId : number) : Promise<Users>
    {
        return this.userServe.getOneUserById(userId)
    }
    /*
    query {
        oneUser(userId: 1) {
            id
        }
    }
    */

    @Mutation(() =>  Users)
    async postUser(@Args("data") newUser : CreateUser) : Promise<Users>
    {
        return this.userServe.createUser(newUser)
    }
    /*
    mutation {
        postUser(
            data: { name: "aurore", pseudo: "zkfzpifez", password: "zeijfzpief" }
        ) {
            id
        }
        }*/

    @Mutation(() => Boolean)
    async updateUser(@Args("data") updateUser : UpdateUser) : Promise<boolean>
    {
        return this.userServe.updateUser(updateUser)
    }
    /*
    mutation {
        updateUser(
            data: { id : 1, name: "turlutte", pseudo: "tbtb", password: "zjngziegnzkrpg" }
        )
    }
*/

}