import { HealthController } from './health.controller';
import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FortuneEntity, FortuneSchema } from './schema';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: FortuneEntity.name, schema: FortuneSchema }]),
  MongooseModule.forRoot('mongodb+srv://DB:teste123@cluster0.igzt0.mongodb.net/Cluster0?retryWrites=true&w=majority')],
  controllers: [
    HealthController, AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule { }
