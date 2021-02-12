const express = require('express');
const Blog = require('../models/blog');
const blogController = require('../controller/blogController');
const {logger} = require("../logger");
const router = express.Router();    

// routes
router.get('/',  blogController.blogIndex);
  
  router.get('/about', blogController.blogAbout);

  router.get('/blogs/create',blogController.blogCreateGet);

  router.get('/blogs', blogController.blogIndexSort);
  
  router.post('/blogs', blogController.blogCreate);
  
  router.get('/blogs/:id', blogController.blogDetails);
  
  router.delete('/blogs/:id', blogController.blogDelete);
  
  router.get('/blogs/:id/edit', blogController.blogEditGet);
  
  router.put('/blogs/:id',blogController.blogEdit);

module.exports = router;