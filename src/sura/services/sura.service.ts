import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {UpdateSuraDto} from "../dto/update-sura.dto";
import {SuraInterface} from "../interfaces/sura.interface";
import {Model} from "mongoose";
import {CreateSuraDto} from "../dto/create-sura.dto";
import {I18n, I18nContext} from "nestjs-i18n";

@Injectable()
export class SuraService
{
    constructor(@InjectModel('Sura') private SuraModel:Model<SuraInterface>) {}

    async create(createSuraDto: CreateSuraDto): Promise<SuraInterface> {

        const item = await new this.SuraModel(createSuraDto);

        return item.save();
    }

    async updateOne(id: string, updateSuraDto: UpdateSuraDto): Promise<SuraInterface> {
        const existing = await this.SuraModel.findByIdAndUpdate(id, updateSuraDto, { new: true });

        if (!existing) {
            throw new NotFoundException(`Sura #${id} not found`);
        }

        return existing;
    }

    async getAll(): Promise<SuraInterface[]> {
        const item = await this.SuraModel.find();
        if (!item || item.length == 0) {

            throw new NotFoundException(`no Suras found!`);
        }

        return item;
    }

    async getOne(id: string): Promise<SuraInterface> {
        const existingSura = await this.SuraModel.findById(id).exec();

        if (!existingSura) {
            throw new NotFoundException(`Sura #${id} not found`);
        }

        return existingSura;
    }

    async deleteOne(id: string): Promise<SuraInterface> {
        const deleted = await this.SuraModel.findByIdAndDelete(id);

        if (!deleted) {
            throw new NotFoundException(`Sura #${id} not found`);
        }

        return deleted;
    }
}
