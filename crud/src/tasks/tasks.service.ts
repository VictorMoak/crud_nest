import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskModel } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(TaskModel) private readonly TaskRepository: Repository<TaskModel>){}

  async create(createTaskDto: CreateTaskDto) {
    await this.TaskRepository.save(createTaskDto);
    return {
      message: "Tarefa Criada com Sucesso!"
    }
  }

  async findAll(){
    return this.TaskRepository.find();
  }

  async findOne(id: number) {
    return this.TaskRepository.findOne(id);
  }


  // async findAll(){
  //   const foundAll = await this.TaskRepository.find({relations : ["user"]})
  //   return foundAll;
  // }

  // async findOne(id: number) {
  //   const foundOne = await this.TaskRepository.findOne(id,{relations : ["user"]})
  //   return foundOne;
  // }

  async findAllUsers(id: number) {
    return this.TaskRepository.find({where:{user: id}});
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {  
    await this.TaskRepository.update(id,updateTaskDto);
    return {
      message: "Usuário vinculado!"
    }
  }

  async remove(id: number) {
    return this.TaskRepository.delete(id);
  }
}
