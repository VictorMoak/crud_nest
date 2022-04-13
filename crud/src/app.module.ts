import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';


@Module({
  imports: [UsersModule, TasksModule,
    TypeOrmModule.forRoot({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "1234",
    "database": "teste-crud",
    "entities": ["dist/*/.entity{.ts,.js}"],
    "synchronize": true,
    "autoLoadEntities": true
}),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
