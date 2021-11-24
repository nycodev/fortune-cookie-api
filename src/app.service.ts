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
  
  //basic create function to the mongo DB
  async create(dto: Dto) : Promise<FortuneEntity> {
    return new this.fortuneModel(dto).save();
  }

  //basic findAll function in the mongo DB wich returns an array of the documents
  async findAll(): Promise<FortuneEntity[]> {
    const result = this.fortuneModel.find();
    return result;
  }
  

  //basic findOne function in the mongo DB, wich returns a single document
  async findOne(id: string): Promise<FortuneEntity> {
    return this.fortuneModel.findById(id);
  }

  //findRandom was created to allow pulling a random phrase from the DB, where the Math.random multiplier  
  //has to be the total number of phrases inserted into the DB. Returns a single random document
  async findRandom(): Promise<FortuneEntity> {
    return this.fortuneModel.findById((Math.ceil(Math.random() * 30)).toString())
  }

  //basic update function in the mongo DB
  async update(
    id: string,
    updateDto: UpdateDto,) : Promise<FortuneEntity> {
      return this.fortuneModel.findOneAndUpdate({ _id: id}, updateDto);
  }

  //basic remove/delete function in the mongo DB
  async remove(id: string): Promise<any> {
    return await this.fortuneModel.findOneAndRemove({ _id: id });
  }
}
