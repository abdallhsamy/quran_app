import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { AyahModule } from "./ayah/ayah.module"
import { SeedsModule } from "./seeds.module"

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'quran_app' }),
    AyahModule,
    SeedsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
