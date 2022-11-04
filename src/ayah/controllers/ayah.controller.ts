import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from "@nestjs/common";
import {CreateAyahDto} from "../dto/create-ayah.dto";
import {UpdateAyahDto} from "../dto/update-ayah.dto";
import {AyahService} from "../services/ayah.service";

@Controller('ayah')
export class AyahController
{
    constructor(private readonly ayahService: AyahService) { }

    @Post()
    async create(@Res() response, @Body() createAyahDto: CreateAyahDto) {
        try {
            const ayah = await this.ayahService.create(createAyahDto);
            return response.status(HttpStatus.CREATED).json({
                message: "Ayah has been created successfully",
                data: ayah
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Ayah not created!',
                error: 'Bad Request'
            });
        }
    }

    @Put('/:id')
    async updateAyah(@Res() response,@Param('id') ayahId: string, @Body() updateAyahDto: UpdateAyahDto) {
        try {
            const ayah = await this.ayahService.updateOne(ayahId, updateAyahDto);

            return response.status(HttpStatus.OK).json({
                message: 'Ayah has been successfully updated',
                data: ayah
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get()
    async getAll(@Res() response) {
        try {
            const ayah = await this.ayahService.getAll();

            return response.status(HttpStatus.OK).json({
                message: 'All ayahs data found successfully',
                data: ayah
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    async getOne(@Res() response, @Param('id') id: string) {
        try {
            const ayah = await this.ayahService.getOne(id);

            return response.status(HttpStatus.OK).json({
                message: 'Ayah found successfully',
                data: ayah
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id: string) {
        try {
            const deletedAyah = await this.ayahService.deleteOne(id);

            return response.status(HttpStatus.OK).json({
                message: 'Ayah deleted successfully',
                deletedAyah
            });
        }catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
