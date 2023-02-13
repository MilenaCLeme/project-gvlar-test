import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OwnerService } from './owner.service';
import { Owner } from './entities/owner.entity';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';

@Resolver(() => Owner)
export class OwnerResolver {
  constructor(private readonly ownerService: OwnerService) {}

  @Mutation(() => Owner)
  async createOwner(
    @Args('createOwnerInput') createOwnerInput: CreateOwnerInput,
  ) {
    return await this.ownerService.createOwner(createOwnerInput);
  }

  @Query(() => [Owner], { name: 'owner' })
  async findAllOwner() {
    return await this.ownerService.findAllOwner();
  }

  @Query(() => Owner, { name: 'owner' })
  async findOneOwner(@Args('id', { type: () => Int }) id: number) {
    return await this.ownerService.findOneOwner(id);
  }

  @Mutation(() => Owner)
  async updateOwner(
    @Args('updateOwnerInput') updateOwnerInput: UpdateOwnerInput,
  ) {
    return await this.ownerService.updateOwner(updateOwnerInput);
  }

  @Mutation(() => Owner)
  async removeOwner(@Args('id', { type: () => Int }) id: number) {
    return await this.ownerService.removeOwner(id);
  }
}
