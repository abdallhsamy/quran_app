import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class Ayah
{
    @Prop({ isRequired: true })
    id: number;

    @Prop({ isRequired: true })
    number: number;

    @Prop({ isRequired: true })
    text: string;

    @Prop({ isRequired: true })
    number_in_surah: number;

    @Prop({ isRequired: true })
    page: number;

    @Prop({ isRequired: true })
    surah_id: number;

    @Prop({ isRequired: true })
    hizb_id: number;

    @Prop({ isRequired: true })
    juz_id: number;

    @Prop({ isRequired: true })
    sajda: boolean;

    @Prop({ isRequired: false, default: Date.now() })
    created_at?: Date;

    @Prop({ isRequired: false, default: Date.now() })
    updated_at?: Date;
}

export const AyahSchema = SchemaFactory.createForClass(Ayah);
