"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("./entities/post.entity");
let PostsService = class PostsService {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    async create(post) {
        const { title } = post;
        if (!title) {
            throw new common_1.HttpException('缺少文章标题', 401);
        }
        const doc = await this.postsRepository.findOne({ where: { title } });
        if (doc) {
            throw new common_1.HttpException('文章已存在', 401);
        }
        return await this.postsRepository.save(post);
    }
    async findAll(query) {
        const qb = await this.postsRepository.createQueryBuilder('post');
        qb.where('1 = 1');
        qb.orderBy('post.create_time', 'DESC');
        const count = await qb.getCount();
        const { pageNum = 1, pageSize = 10, ...params } = query;
        qb.limit(pageSize);
        qb.offset(pageSize * (pageNum - 1));
        const posts = await qb.getMany();
        return { list: posts, count: count };
    }
    async findById(id) {
        return await this.postsRepository.findOne({ where: { id } });
    }
    async updateById(id, post) {
        const existPost = await this.postsRepository.findOne({ where: { id } });
        if (!existPost) {
            throw new common_1.HttpException(`id为${id}的文章不存在`, 401);
        }
        const updatePost = this.postsRepository.merge(existPost, post);
        return this.postsRepository.save(updatePost);
    }
    async remove(id) {
        const existPost = await this.postsRepository.findOne({ where: { id } });
        if (!existPost) {
            throw new common_1.HttpException(`id为${id}的文章不存在`, 401);
        }
        return await this.postsRepository.remove(existPost);
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.PostsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostsService);
//# sourceMappingURL=posts.service.js.map