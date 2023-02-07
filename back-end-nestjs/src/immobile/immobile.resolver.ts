import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImmobileService } from './immobile.service';
import { Immobile } from './entities/immobile.entity';
import { CreateImmobileInput } from './dto/create-immobile.input';
import { UpdateImmobileInput } from './dto/update-immobile.input';

@Resolver(() => Immobile)
export class ImmobileResolver {
  constructor(private readonly immobileService: ImmobileService) {}

  @Mutation(() => Immobile)
  createImmobile(@Args('createImmobileInput') createImmobileInput: CreateImmobileInput) {
    return this.immobileService.create(createImmobileInput);
  }

  @Query(() => [Immobile], { name: 'immobile' })
  findAll() {
    return this.immobileService.findAll();
  }

  @Query(() => Immobile, { name: 'immobile' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.immobileService.findOne(id);
  }

  @Mutation(() => Immobile)
  updateImmobile(@Args('updateImmobileInput') updateImmobileInput: UpdateImmobileInput) {
    return this.immobileService.update(updateImmobileInput.id, updateImmobileInput);
  }

  @Mutation(() => Immobile)
  removeImmobile(@Args('id', { type: () => Int }) id: number) {
    return this.immobileService.remove(id);
  }
}
