import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';

@Module({
  imports: [ 
    // GraphQLModule.forRoot({ autoSchemaFile: true }) 
    GraphQLFederationModule.forRoot({ autoSchemaFile: true }) 
  ],
  providers: [
    AppService,
    AppResolver,
  ],
})
export class AppModule {}
