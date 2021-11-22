import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FortuneDocument, FortuneEntity } from './schema';
import { Dto } from './dto';
import { UpdateDto } from './update-dto';


@Injectable()
export class AppService {
  constructor(
    @InjectModel(FortuneEntity.name)
    private fortuneModel: Model<FortuneDocument>,
  ) {}

  async create(dto: Dto) : Promise<FortuneEntity> {
    return new this.fortuneModel(dto).save();
  }

  async findAll(): Promise<FortuneEntity[]> {
    const result = this.fortuneModel.find();
    return result;
  }
  
  async findOne(id: string): Promise<FortuneEntity> {
    return this.fortuneModel.findById(id);
  }

  async update(
    id: string,
    updateDto: UpdateDto,) : Promise<FortuneEntity> {
      return this.fortuneModel.findOneAndUpdate({ _id: id}, updateDto);
  }

  async remove(id: string): Promise<any> {
    return await this.fortuneModel.findOneAndRemove({ _id: id });
  }

  getPhrase(): object {
    return {frase: 'Acredite em você mesmo e se mexa para fazer acontecer!'}
  }
}
