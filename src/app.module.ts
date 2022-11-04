import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {AyahSchema} from "./ayah/schema/ayah.schema";
import {AyahService} from "./ayah/services/ayah.service";
import {AyahController} from "./ayah/controllers/ayah.controller";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'quran_app'}), // mongodb://<username>:<password>@localhost:27017
    MongooseModule.forFeature([
        { name: 'Ayah', schema: AyahSchema }
    ])
  ],
  controllers: [AppController, AyahController],
  providers: [AppService, AyahService],
})
export class AppModule {}
