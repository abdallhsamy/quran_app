import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { AyahModule } from "./ayah/ayah.module"
import { SeedsModule } from "./seeds.module"
import { ConfigModule } from "@nestjs/config";
import config from "./config";
import {AcceptLanguageResolver, I18nModule, QueryResolver} from "nestjs-i18n";
import * as path from 'path';
import { SuraModule } from "./sura/sura.module";

@Module({
  imports: [
    MongooseModule.forRoot(config.mongo_connection_string, { dbName: config.database_name }),
    AyahModule,
    SuraModule,
    SeedsModule,
    ConfigModule.forRoot(),
    I18nModule.forRoot({
      fallbackLanguage: 'ar',
      fallbacks : {
        'en-*': 'en',
        'ar-*': 'ar'
      },
      loaderOptions: {
        path: path.join(__dirname, '/translations/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
