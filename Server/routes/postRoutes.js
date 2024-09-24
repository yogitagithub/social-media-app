const express = require('express');
const postModel = require('../models/post');
const router = express.Router();

const jwt = require('jsonwebtoken');



// create post
    router.post('/create-post', async (req, res) => {
        try {
            const { title, description, author } = req.body;
            if (!title || !description || !author ) {
                return res.status(400).send({
                  success: false,
                  message: "Please Provide All Fields",
                });
              }
              const newPost = new postModel({ title, description, author });
              await newPost.save();

              return res.status(201).send({
                success: true,
                message: "Post Created!",
                newPost,
              });
           
        }
    
        catch (error) {
            console.log(error);
            return res.status(400).send({
              success: false,
              message: "Error While Creating post",
              error,
            });
        }
    });
    

// get all post
    router.get('/getAll-post', async (req, res) => {
      try {
        const post = await postModel.find({});
        if (!post) {
          return res.status(200).send({
            success: false,
            message: "No Post Found",
          });
        }
        return res.status(200).send({
          success: true,
          PostCount: post.length,
          message: "All Post lists",
          post,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).send({
          success: false,
          message: "Error WHile Getting Post",
          error,
        });
      }
    });




   
module.exports = router;