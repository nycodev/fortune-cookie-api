import { Controller, Get, Body, Delete, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Dto } from './dto';


@Controller('cookie')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() dto : Dto) : Promise<Dto[]> {
    const dtoResponse: any = await this.appService.create(
      dto,
    );
    return dtoResponse;
  }

  @Get('show-all')
  async findAll(): Promise<Dto[]> {
    const dtoResponse = await this.appService.findAll();
    return dtoResponse;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Dto> {
    const dtoResponse = await this.appService.findOne(id);
    return dtoResponse;
  }

  @Patch(':id') 
    async update(
      @Param('id') id: string,
      @Body() dto: Dto,
      ): Promise<Dto> {
        await this.appService.update(id, dto);
        return;
      }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.appService.remove(id);
  }
  

  @Get()
  getPhrase(): object {
    return this.appService.getPhrase();
  }
}
