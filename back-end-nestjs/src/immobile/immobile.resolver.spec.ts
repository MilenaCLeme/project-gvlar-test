import { Test, TestingModule } from '@nestjs/testing';
import { ImmobileResolver } from './immobile.resolver';
import { ImmobileService } from './immobile.service';

describe('ImmobileResolver', () => {
  let resolver: ImmobileResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImmobileResolver, ImmobileService],
    }).compile();

    resolver = module.get<ImmobileResolver>(ImmobileResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
