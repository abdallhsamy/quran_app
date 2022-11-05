import { Test, TestingModule } from '@nestjs/testing';
import { SuraService } from './sura.service';

describe('SuraService', () => {
  let service: SuraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuraService],
    }).compile();

    service = module.get<SuraService>(SuraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
