import { Test, TestingModule } from '@nestjs/testing';
import { ImmobileService } from './immobile.service';

describe('ImmobileService', () => {
  let service: ImmobileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImmobileService],
    }).compile();

    service = module.get<ImmobileService>(ImmobileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
