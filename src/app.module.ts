import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { AyahModule } from "./ayah/ayah.module"
import { SeedsModule } from "./seeds.module"
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017', { dbName: process.env.DATABASE_NAME ||'quran_app' }),
    AyahModule,
    SeedsModule,
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
