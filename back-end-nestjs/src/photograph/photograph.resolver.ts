import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PhotographService } from './photograph.service';
import { Photograph } from './entities/photograph.entity';

@Resolver(() => Photograph)
export class PhotographResolver {
  constructor(private readonly photographService: PhotographService) {}

  @Query(() => Photograph, { name: 'photograph' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.photographService.findOne(id);
  }

  @Mutation(() => Photograph)
  singleUpload(@Args('id', { type: () => Int }) id: number) {
    return this.photographService.remove(id);
  }
}
