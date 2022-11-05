import { Document } from 'mongoose';

export interface SuraInterface extends Document
{
    readonly id: number;
    readonly number: number;
    readonly name_ar: string;
    readonly name_en: string;
    readonly name_en_translation: string;
    readonly type: string;
}
