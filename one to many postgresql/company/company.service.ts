import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/entities/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {

  constructor (@InjectRepository(Company) private company: Repository<Company>) {}

  create(body) {
    return this.company.save(body)
  }

  findAll() {
    return this.company.find()
  }

  findOne(id) {
    return this.company.findOneBy({ id })
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return this.company.save(updateCompanyDto)
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
