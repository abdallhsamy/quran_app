import { Test, TestingModule } from '@nestjs/testing';
import { SuraController } from './sura.controller';

describe('SuraController', () => {
  let controller: SuraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuraController],
    }).compile();

    controller = module.get<SuraController>(SuraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
