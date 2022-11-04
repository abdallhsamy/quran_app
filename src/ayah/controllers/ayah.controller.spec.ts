import { Test, TestingModule } from '@nestjs/testing';
import { AyahController } from './ayah.controller';

describe('AyahController', () => {
  let controller: AyahController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AyahController],
    }).compile();

    controller = module.get<AyahController>(AyahController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
