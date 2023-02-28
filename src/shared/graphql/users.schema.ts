import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";

@ObjectType() //equivaut à définir un modele type QUERY -> représente le dto de type get
export class Users{

    @Field(type => Int)
    id : number

    @Field(type => String)
    name : string

    @Field(type => String)
    pseudo : string
}

@InputType() //equivaut ç définir un DTO de create et ici en gql c'est le mutation
export class CreateUser{

    @Field(type => String)
    name : string

    @Field(type => String, {
        description : "Pseudo must be unique",
        defaultValue : Date.now()
    })
    pseudo : string

    @Field(type => String)
    password : string

}

@InputType() //equivaut à définir un DTO de create et ici en gql c'est le mutation
export class UpdateUser{

    @Field(type => Int)
    id : number
    
    @Field(type => String)
    name : string

    @Field(type => String)
    pseudo : string

    @Field(type => String)
    password : string

}