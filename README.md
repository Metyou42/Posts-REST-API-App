# Posts REST Api App

#### REST API for create, get, update and delete posts

## Used technology

- Node.js/Express
- fileupload
- MongoDB
- uuid
- dotenv
- GRUD

## Opportunities

- Get all posts in JSON (GET)
- Create posts (POST)
- Unpate posts (PUT)
- Delete posts (DELETE)
- Get post by id (GET)

## Guide how to use

| ApiKey                | Descriptions                                                                        |
| --------------------- | ----------------------------------------------------------------------------------- |
| GET api/posts         | Get all posts in JSON format                                                        |
| GET api/posts/{id}    | Get post by id in JSON format                                                       |
| POST api/posts        | Create new post, req.files - for title picture, req.body - {author, title, content} |
| PUT api/posts         | Update post, req.body - {\_id, ...}                                                 |
| DELETE api/posts/{id} | Delete post by id                                                                   |
