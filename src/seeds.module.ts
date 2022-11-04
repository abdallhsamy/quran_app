import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';

import { AyatSeed } from './database/seeders/ayat.seed';
import { AyahModule } from "./ayah/ayah.module"

@Module({
    imports: [CommandModule, AyahModule],
    providers: [AyatSeed],
    exports: [AyatSeed],
})
export class SeedsModule { }
