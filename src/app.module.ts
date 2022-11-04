import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { AyahModule } from "./ayah/ayah.module"
import { SeedsModule } from "./seeds.module"
import { ConfigModule } from "@nestjs/config";
import config from "./config";

@Module({
  imports: [
    MongooseModule.forRoot(config.mongo_connection_string, { dbName: config.database_name }),
    AyahModule,
    SeedsModule,
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
