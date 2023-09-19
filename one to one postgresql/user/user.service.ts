import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private user: Repository<User>) {}

  async create(createUserDto) {
    return await this.user.save(createUserDto)
  }

  async findAll() {
    return await this.user.find()
  }

  async findOne(id) {
    return await this.user.findOneBy({ id })
  }

  async update(body, id) {
    return await this.user.save(id, body)
  }

  async remove(id) {
    return await this.user.delete(id)
  }

  async patch (id, body) {
    return await this.user.update(id, body)
  }
}
