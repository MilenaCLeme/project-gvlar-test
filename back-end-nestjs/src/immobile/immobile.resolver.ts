import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImmobileService } from './immobile.service';
import { Immobile } from './entities/immobile.entity';
import { CreateImmobileInput } from './dto/create-immobile.input';
import { UpdateImmobileInput } from './dto/update-immobile.input';
import { ResponseImmobile } from './dto/response-immobile';
import { CurrentUserId } from 'src/auth/decorators/currentUserId.decorator';

@Resolver(() => Immobile)
export class ImmobileResolver {
  constructor(private readonly immobileService: ImmobileService) {}

  @Mutation(() => ResponseImmobile)
  createImmobile(
    @Args('createImmobileInput') createImmobileInput: CreateImmobileInput,
    @CurrentUserId() userId: number,
  ) {
    return this.immobileService.createImmobile(userId, createImmobileInput);
  }

  @Query(() => [Immobile], { name: 'immobile' })
  findAll() {
    return this.immobileService.findAllImmobile();
  }

  @Query(() => [Immobile], { name: 'immobile' })
  findManyImmobileUser(@Args('id', { type: () => Int }) id: number) {
    return this.immobileService.findManyImmobileUser(id);
  }

  @Mutation(() => Immobile)
  updateImmobile(
    @Args('updateImmobileInput') updateImmobileInput: UpdateImmobileInput,
  ) {
    return this.immobileService.updateImmobile(updateImmobileInput);
  }

  @Mutation(() => Immobile)
  removeImmobile(@Args('id', { type: () => Int }) id: number) {
    return this.immobileService.removeImmobile(id);
  }
}
