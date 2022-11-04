import { Document } from 'mongoose';

export interface AyahInterface extends Document
{
    readonly id: number;
    readonly number: number;
    readonly text: string;
    readonly number_in_surah: number;
    readonly page: number;
    readonly surah_id: number;
    readonly hizb_id: number;
    readonly juz_id: number;
    readonly sajda: boolean;
    // readonly created_at: Date;
    // readonly updated_at: Date;
}
