const Post = require('./post');
const PostService = require('./PostService');

class PostController {
  async create(req, res) {
    try {
      console.log(req.files);
      const post = await PostService.create(req.body, req.files.picture);
      res.status(200).json(post);
    } catch (e) {
      console.log(e);
      res.status(500).json(e.messagee);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      res.status(200).json(posts);
    } catch (e) {
      console.log(e);
      res.status(500).json(e.message);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const post = await PostService.getOne(id);
      res.status(200).json(post);
    } catch (e) {
      console.log(e);
      res.status(500).json(e.message);
    }
  }

  async update(req, res) {
    try {
      const post = req.body;
      const updatePost = await PostService.update(post);
      res.status(200).json(updatePost);
    } catch (e) {
      console.log(e);
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const post = await PostService.delete(id);
      res.status(200).json(post);
    } catch (e) {
      console.log(e);
      res.status(500).json(e.message);
    }
  }
}

module.exports = new PostController();
