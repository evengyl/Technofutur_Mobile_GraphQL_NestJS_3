import { ApolloDriver } from '@nestjs/apollo';
import { ApolloDriverConfig } from '@nestjs/apollo/dist/interfaces';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UsersModule } from './_users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver : ApolloDriver,
      autoSchemaFile : join(process.cwd(), "src/shared/schema.gql" ),
      include : [UsersModule],
      playground : true
    }),
    TypeOrmModule.forRoot({
      type : "mysql",
      host : "localhost",
      port : 3306,
      username : "root",
      password : "",
      database : "demo_mobile_techno",
      entities : [__dirname + '/**/*.entity.{ts, js}'],
      autoLoadEntities : true,
      synchronize : true,
      //logging : "all"

    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
