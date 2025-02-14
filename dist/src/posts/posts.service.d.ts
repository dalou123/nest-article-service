import { Repository } from 'typeorm';
import { PostsEntity } from './entities/post.entity';
export interface PostsRo {
    list: PostsEntity[];
    count: number;
}
export declare class PostsService {
    private readonly postsRepository;
    constructor(postsRepository: Repository<PostsEntity>);
    create(post: Partial<PostsEntity>): Promise<PostsEntity>;
    findAll(query: any): Promise<PostsRo>;
    findById(id: any): Promise<PostsEntity>;
    updateById(id: any, post: any): Promise<PostsEntity>;
    remove(id: any): Promise<PostsEntity>;
}
