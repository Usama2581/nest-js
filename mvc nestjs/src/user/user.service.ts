import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private user: Repository<User>) {}

  async add(body) {
     return await this.user.save(body)
  }

  async getAll() {
    return this.user.find()
  }

  async getOne(id) {
    return await this.user.findBy({ id })
  }

  async delete(id) {
    return await this.user.delete(id)
  }

  async update(id, body) {
    return await this.user.update(id, body)
  }


}
