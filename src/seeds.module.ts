import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';

import { AyatSeed } from './database/seeders/ayat.seed';
import { AyahModule } from "./ayah/ayah.module"
import {SuraSeed} from "./database/seeders/sura.seed";
import {SuraModule} from "./sura/sura.module";

@Module({
    imports: [
        CommandModule,
        AyahModule,
        SuraModule
    ],
    providers: [
        AyatSeed,
        SuraSeed
    ],
    exports: [
        AyatSeed,
        SuraSeed
    ],
})
export class SeedsModule { }
