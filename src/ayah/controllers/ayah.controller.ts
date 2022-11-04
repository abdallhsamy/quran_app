import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from "@nestjs/common";
import {CreateAyahDto} from "../dto/create-ayah.dto";
import {UpdateAyahDto} from "../dto/update-ayah.dto";
import {AyahService} from "../services/ayah.service";
import {I18n, I18nContext} from "nestjs-i18n";

@Controller('ayah')
export class AyahController
{
    constructor(private readonly ayahService: AyahService) { }

    @Post()
    async create(@Res() response, @Body() createAyahDto: CreateAyahDto, @I18n() i18n: I18nContext) {
        try {
            const ayah = await this.ayahService.create(createAyahDto);
            return response
                .status(HttpStatus.CREATED)
                .json({
                message: await i18n.t('ayah.created_successfully'),
                data: ayah
            });
        } catch (err) {
            return response
                .status(HttpStatus.BAD_REQUEST)
                .json({
                statusCode: 400,
                message: await i18n.t('ayah.error_not_created'),
                error: await i18n.t('general.bad_request')
            });
        }
    }

    @Put('/:id')
    async updateAyah(@Res() response,@Param('id') ayahId: string, @Body() updateAyahDto: UpdateAyahDto, @I18n() i18n: I18nContext) {
        try {
            const ayah = await this.ayahService.updateOne(ayahId, updateAyahDto);

            return response
                .status(HttpStatus.OK)
                .json({
                message: await i18n.t('ayah.updated_successfully'),
                data: ayah
            });
        } catch (err) {
            return response
                .status(err.status)
                .json(err.response);
        }
    }

    @Get()
    async getAll(@Res() response, @I18n() i18n: I18nContext) {
        try {
            const ayah = await this.ayahService.getAll();

            return response
                .status(HttpStatus.OK)
                .json({
                message: await i18n.t('ayah.get_all_successfully'),
                data: ayah
            });
        } catch (err) {
            return response
                .status(err.status)
                .json(err.response);
        }
    }

    @Get('/:id')
    async getOne(@Res() response, @Param('id') id: string, @I18n() i18n: I18nContext) {
        try {
            const ayah = await this.ayahService.getOne(id);

            return response
                .status(HttpStatus.OK)
                .json({
                message: await i18n.t('ayah.found_one_successfully'),
                data: ayah
            });
        } catch (err) {
            return response
                .status(err.status)
                .json(err.response);
        }
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id: string, @I18n() i18n: I18nContext) {
        try {
            const deleted = await this.ayahService.deleteOne(id);

            return response
                .status(HttpStatus.OK)
                .json({
                    deleted,
                    message: await i18n.t('ayah.deleted_successfully')
                });
        }catch (err) {
            return response
                .status(err.status)
                .json(err.response);
        }
    }
}
