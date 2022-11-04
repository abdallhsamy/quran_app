import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {UpdateAyahDto} from "../dto/update-ayah.dto";
import {AyahInterface} from "../interfaces/ayah.interface";
import {Model} from "mongoose";
import {CreateAyahDto} from "../dto/create-ayah.dto";
import {I18n, I18nContext} from "nestjs-i18n";

@Injectable()
export class AyahService
{
    constructor(@InjectModel('Ayah') private AyahModel:Model<AyahInterface>) {}

    async create(createAyahDto: CreateAyahDto): Promise<AyahInterface> {

        const item = await new this.AyahModel(createAyahDto);

        return item.save();
    }

    async updateOne(id: string, updateAyahDto: UpdateAyahDto, @I18n() i18n: I18nContext): Promise<AyahInterface> {
        const existing = await this.AyahModel.findByIdAndUpdate(id, updateAyahDto, { new: true });

        if (!existing) {
            throw new NotFoundException(await i18n.t('ayah.ayah_id_not_found', { args: {id : id}}));
        }

        return existing;
    }

    async getAll(@I18n() i18n: I18nContext): Promise<AyahInterface[]> {
        const item = await this.AyahModel.find();
        if (!item || item.length == 0) {

            throw new NotFoundException(await i18n.t('no_ayat_found'));
        }

        return item;
    }

    async getOne(id: string, @I18n() i18n: I18nContext): Promise<AyahInterface> {
        const existingAyah = await this.AyahModel.findById(id).exec();

        if (!existingAyah) {
            throw new NotFoundException(await i18n.t('ayah.ayah_id_not_found', { args: {id : id}}));
        }

        return existingAyah;
    }

    async deleteOne(id: string, @I18n() i18n: I18nContext): Promise<AyahInterface> {
        const deleted = await this.AyahModel.findByIdAndDelete(id);

        if (!deleted) {
            throw new NotFoundException(await i18n.t('ayah.ayah_id_not_found', { args: {id : id}}));
        }

        return deleted;
    }
}
