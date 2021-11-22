import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FortuneEntity, FortuneSchema } from './schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: FortuneEntity.name, schema: FortuneSchema}]),
  MongooseModule.forRoot('mongodb+srv://DB:teste123@cluster0.igzt0.mongodb.net/Cluster0?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
