import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import RepoService from '../repo.service';
import Author from '../db/models/author.entity';
import AuthorInput from './input/author.input';

@Resolver(Author)
class AuthorResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(returns => [Author])
  public async authors(): Promise<Author[]> {
    return await this.repoService.authorRepo.find();;
  }

  @Query(returns => Author, {nullable: true})
  public async author(@Args('id') id: number): Promise<Author> {
    return await this.repoService.authorRepo.findOne({where: {id}});
  }

  @Mutation(returns => Author)
  public async createAuthor(@Args('data') input: AuthorInput): Promise<Author> {
    const author = this.repoService.authorRepo.create({name: input.name});
    return  this.repoService.authorRepo.save(author);
  }
}
export default AuthorResolver;
