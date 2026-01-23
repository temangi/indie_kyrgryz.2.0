import { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    title: String,
    text: String,
    imageUrl: String,
  },
  { timestamps: true }
);

export default models.Post || model("Post", PostSchema);
