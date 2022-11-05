import { PartialType } from '@nestjs/mapped-types';
import { CreateSuraDto } from './create-sura.dto';

export class UpdateSuraDto extends PartialType(CreateSuraDto) {}
