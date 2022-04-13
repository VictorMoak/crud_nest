import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserModel } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserModel) private readonly userRepository: Repository<UserModel>){}

  async create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  async findAll(){
    return this.userRepository.find();
  }

  async findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {  
    await this.userRepository.update(id,updateUserDto);
    return {
      message: "Usuário alterado!"
    }
  }

  async remove(id: number) {
    return this.userRepository.delete(id);
  }
}
