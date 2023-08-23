import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';


@Injectable()

export class UserService {

  constructor(@InjectRepository(User) private user: Repository<User>) {
    // console.log(user)
  }

  async create(body) {
    try {
      console.log(body)
      return await this.user.save(body) 
    } catch (e) {
      console.log(e.message)
    }
  }

  async findAll() {
    return await this.user.find()
  }

  async findOne(id) {
    return await this.user.findBy({ id }) 
  }

  async update(id, body) {
    return await this.user.update(id, body)
  }

  async remove(id: number) {
    return await this.user.delete(id)
  }
}
