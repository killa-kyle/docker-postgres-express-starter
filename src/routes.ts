import {
  createPostController,
  deletePostController,
  getPostController,
  getPostsController,
  updatePostController,
} from "./controllers/postController";

export default (app): void => {
  statusRoutes(app);
  postRoutes(app);
};

const postRoutes = (app) => {
  // get posts
  app.get("/api/v1/posts", getPostsController);
  // get post detail
  app.get("/api/v1/posts/:id", getPostController);
  // create post
  app.post("/api/v1/posts", createPostController);
  // delete post
  app.delete("/api/v1/posts/:id", deletePostController);
  // update post
  app.put("/api/v1/posts/:id", updatePostController);
};

const statusRoutes = (app) => {
  app.get("/api/v1/status", (req, res) => {
    res.send({
      status: "sever running",
    });
  });
};
