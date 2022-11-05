import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class Sura
{
    @Prop({ isRequired: true })
    id: number;

    @Prop({ isRequired: true })
    number: number;

    @Prop({ isRequired: true })
    name_ar: string;

    @Prop({ isRequired: true })
    name_en: string;

    @Prop({ isRequired: true })
    name_en_translation: string;

    @Prop({ isRequired: true })
    type: string;
}

export const SuraSchema = SchemaFactory.createForClass(Sura);
