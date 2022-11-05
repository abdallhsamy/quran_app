import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from "@nestjs/common";
import {CreateSuraDto} from "../dto/create-sura.dto";
import {UpdateSuraDto} from "../dto/update-sura.dto";
import {SuraService} from "../services/sura.service";
import {I18n, I18nContext} from "nestjs-i18n";

@Controller('sura')
export class SuraController
{
    constructor(private readonly suraService: SuraService) { }

    @Post()
    async create(@Res() response, @Body() createSuraDto: CreateSuraDto, @I18n() i18n: I18nContext) {
        try {
            const sura = await this.suraService.create(createSuraDto);
            return response
                .status(HttpStatus.CREATED)
                .json({
                message: await i18n.t('sura.created_successfully'),
                data: sura
            });
        } catch (err) {
            return response
                .status(HttpStatus.BAD_REQUEST)
                .json({
                statusCode: 400,
                message: await i18n.t('sura.error_not_created'),
                error: await i18n.t('general.bad_request')
            });
        }
    }

    @Put('/:id')
    async updateSura(@Res() response,@Param('id') id: string, @Body() updateSuraDto: UpdateSuraDto, @I18n() i18n: I18nContext) {
        try {
            const sura = await this.suraService.updateOne(id, updateSuraDto);

            return response
                .status(HttpStatus.OK)
                .json({
                message: await i18n.t('sura.updated_successfully'),
                data: sura
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
            const sura = await this.suraService.getAll();

            return response
                .status(HttpStatus.OK)
                .json({
                message: await i18n.t('sura.get_all_successfully'),
                data: sura
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
            const sura = await this.suraService.getOne(id);

            return response
                .status(HttpStatus.OK)
                .json({
                message: await i18n.t('sura.found_one_successfully'),
                data: sura
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
            const deleted = await this.suraService.deleteOne(id);

            return response
                .status(HttpStatus.OK)
                .json({
                    deleted,
                    message: await i18n.t('sura.deleted_successfully')
                });
        }catch (err) {
            return response
                .status(err.status)
                .json(err.response);
        }
    }
}
