import { Module } from '@nestjs/common';
import { SuraService } from "./services/sura.service"
import { SuraController } from "./controllers/sura.controller"
import { SuraSchema } from "./schema/sura.schema"
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: 'Sura',
                    schema: SuraSchema
                }
            ]
        )
    ],
    controllers: [SuraController],
    providers: [SuraService],
    exports: [SuraService],
})
export class SuraModule { }
