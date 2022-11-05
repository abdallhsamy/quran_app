import {IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateSuraDto
{
    @IsNumber()
    readonly id: number;

    @IsNumber()
    @IsNotEmpty()
    readonly number: number;

    @IsString()
    @IsNotEmpty()
    readonly name_ar: string;

    @IsString()
    @IsNotEmpty()
    readonly name_en: string;

    @IsString()
    @IsNotEmpty()
    readonly name_en_translation: string;

    @IsString()
    @IsNotEmpty()
    readonly type: string;
}
