import { Module } from '@nestjs/common';
import { AyahService } from "./services/ayah.service"
import { AyahController } from "./controllers/ayah.controller"
import { AyahSchema } from "./schema/ayah.schema"
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'Ayah', schema: AyahSchema }
    ])],
    controllers: [AyahController],
    providers: [AyahService],
    exports: [AyahService],
})
export class AyahModule { }