import { Test, TestingModule } from '@nestjs/testing';
import { PhotographResolver } from './photograph.resolver';
import { PhotographService } from './photograph.service';

describe('PhotographResolver', () => {
  let resolver: PhotographResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotographResolver, PhotographService],
    }).compile();

    resolver = module.get<PhotographResolver>(PhotographResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
