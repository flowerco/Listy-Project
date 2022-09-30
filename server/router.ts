import { login, register } from './controllers/auth.controller';
import { createPost, deletePost, getAllPosts, getPost, toggleLike } from './controllers/post.controller';
import { followUser, getByNameOrId, getPosts, unfollowUser } from './controllers/user.controller';
import { Router } from 'express';

const router = Router();

// TODO: there are a lot of duplicated '/api/posts' and '/api/users' paths 
// that we can probably remove from the front end and back end code.

// Authentication routes
router.post('/register', register);
router.post('/login', login);

// User routes
router.get("/api/users/", getByNameOrId);
// TODO: Do we need follow and unfollow routes? Can we just have a single toggle route?
router.put("/api/users/:id/follow", followUser);
router.put("/api/users/:id/unfollow", unfollowUser);


// Post routes
// NOTE: This version includes jwt checks, we should probably implement this using the code in the 'server/session' folder.
// router.post("/", [checkJwt, checkJwt2], createPost);
router.post("/api/posts/", createPost);
router.get("/api/posts/:id", getPost);
// TOFIX: Doesn't look like the below route is used, seems like '/posts' in the user controller is the one used up to now.
// router.get("/mainfeed/:userId", getAllPosts);
router.get("/api/posts//posts", getPosts);
router.delete("/api/posts/post/delete/:id", deletePost);
router.put("/api/posts/:id/like", toggleLike);


export default router;

