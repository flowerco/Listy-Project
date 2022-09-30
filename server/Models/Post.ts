// import mongoose from "mongoose";
// const Schema = new mongoose.Schema;
import { Schema, model } from "mongoose";
import { PostType } from './customTypes';


const PostSchema = new Schema<PostType>({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // required: true
  },
  likes: {
    type: [String],
  },
});

export const Post = model<PostType>("Post", PostSchema);
