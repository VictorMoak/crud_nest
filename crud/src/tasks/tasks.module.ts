import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskModel } from './entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskModel])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
