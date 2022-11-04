import {IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateAyahDto
{
    @IsNumber()
    readonly id: number;

    @IsNumber()
    @IsNotEmpty()
    readonly number: number;

    @IsString()
    @IsNotEmpty()
    readonly text: string;

    @IsNumber()
    @IsNotEmpty()
    readonly number_in_surah: number;

    @IsNumber()
    @IsNotEmpty()
    readonly page: number;

    @IsNumber()
    @IsNotEmpty()
    readonly surah_id: number;

    @IsNumber()
    @IsNotEmpty()
    readonly hizb_id: number;

    @IsNumber()
    @IsNotEmpty()
    readonly juz_id: number;

    @IsBoolean()
    readonly sajda: boolean;
}
