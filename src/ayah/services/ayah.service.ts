import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {UpdateAyahDto} from "../dto/update-ayah.dto";
import {AyahInterface} from "../interfaces/ayah.interface";
import {Model} from "mongoose";
import {CreateAyahDto} from "../dto/create-ayah.dto";

@Injectable()
export class AyahService
{
    constructor(@InjectModel('Ayah') private AyahModel:Model<AyahInterface>) {}

    async create(createAyahDto: CreateAyahDto): Promise<AyahInterface> {

        const item = await new this.AyahModel(createAyahDto);

        return item.save();
    }

    async updateOne(id: string, updateAyahDto: UpdateAyahDto): Promise<AyahInterface> {
        const existing = await this.AyahModel.findByIdAndUpdate(id, updateAyahDto, { new: true });

        if (!existing) {
            throw new NotFoundException(`Ayah #${id} not found`);
        }

        return existing;
    }

    async getAll(): Promise<AyahInterface[]> {
        const item = await this.AyahModel.find();
        if (!item || item.length == 0) {
            throw new NotFoundException('Ayahs data not found!');
        }

        return item;
    }

    async getOne(id: string): Promise<AyahInterface> {
        const existingAyah = await this.AyahModel.findById(id).exec();

        if (!existingAyah) {
            throw new NotFoundException(`Ayah #${id} not found`);
        }

        return existingAyah;
    }

    async deleteOne(id: string): Promise<AyahInterface> {
        const deleted = await this.AyahModel.findByIdAndDelete(id);

        if (!deleted) {
            throw new NotFoundException(`Ayah #${id} not found`);
        }

        return deleted;
    }
}
