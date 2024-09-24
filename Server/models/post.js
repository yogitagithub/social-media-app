const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "title is required"],
    },
    description: {
      type: String,
      required: [true, "description is require"],
    },
      author: {
        type: String,
        required: [true, "author is require"],
      },
    
  },
  { timestamps: true }
);

const postModel = mongoose.model("CreatedPost", postSchema);

module.exports = postModel;