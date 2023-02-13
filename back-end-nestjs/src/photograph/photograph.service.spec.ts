import { Test, TestingModule } from '@nestjs/testing';
import { PhotographService } from './photograph.service';

describe('PhotographService', () => {
  let service: PhotographService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotographService],
    }).compile();

    service = module.get<PhotographService>(PhotographService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
