import { PartialType } from '@nestjs/mapped-types';
import { CreateAyahDto } from './create-ayah.dto';

export class UpdateAyahDto extends PartialType(CreateAyahDto) {}
