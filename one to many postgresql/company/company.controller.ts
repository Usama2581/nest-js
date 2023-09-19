import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Query, Put } from '@nestjs/common';
import { CompanyService } from './company.service';


@Controller('company')
export class CompanyController {

  constructor(private readonly companyService: CompanyService) { }

  @Post('/post')
  create(@Body() body) {
    console.log(body)
    return this.companyService.create(body)
  }

   // to add new product in company
  @Put('/add')
  async add(@Body() body, @Query('id') id) {

    let result = await this.companyService.findOne(id)

    if (!result) {
      throw new NotFoundException('Company not found')
    }
    else {
      result.product.push(body)
      // return result
      return await this.companyService.create(result)
    }
  }


  @Get('/')
  findAll() {
    return this.companyService.findAll();
  }


  @Get('/get/:id')
  findOne(@Param('id') id) {
    return this.companyService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto) {
    return this.companyService.update(+id, updateCompanyDto);
  }

  @Delete('/:id')
  remove(@Param('id') id) {
    return this.companyService.remove(+id);
  }
}
