import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersEntity } from "src/shared/entities/Users.entity";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";

@Module({
    imports : [
        TypeOrmModule.forFeature([
            UsersEntity,
        ])
    ],
    providers : [UsersService, UsersResolver]
})
export class UsersModule{}