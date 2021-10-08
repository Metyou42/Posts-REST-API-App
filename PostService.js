const Post = require('./post');
const FileService = require('./fileService');

class PostService {
  async create(post, picture) {
    const fileName = FileService.saveFile(picture);
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost;
  }

  async getAll() {
    const allPosts = await Post.find();
    return allPosts;
  }

  async getOne(id) {
    if (!id) throw new Error('id is not definedd');
    const post = await Post.findById(id);
    return post;
  }

  async update(post) {
    if (!post._id) throw new Error('id is not definedd');
    const updatePost = await Post.findByIdAndUpdate(post._id, post, { new: true });
    return updatePost;
  }

  async delete(id) {
    if (!id) throw new Error('id is not definedd');
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

module.exports = new PostService();
