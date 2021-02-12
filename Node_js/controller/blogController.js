const Blog = require('../models/blog');
const {logger} = require("../logger");


const blogAbout = (req,res) => {
    res.render('about', { title: 'About' });
}

const blogDetails = (req,res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
        res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => {
        console.log(err);
        });
    }

const blogDelete = (req,res) =>  {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
        res.json({ redirect: '/blogs' });
        })
        .catch(err => {
        console.log(err);
        });
    }

const blogEditGet = (req,res) =>  {
    const id = req.params.id;
    const blog = Blog.findById(id)
    .then(result => {
        res.render('edit',{blog: result, title: 'details Blog'})
    })
    .catch(err => {
        console.log(err);
    });
    }

const blogEdit = (req,res) => {
    const id = req.params.id;
        const blog = Blog.findByIdAndUpdate(id,req.body)
        .then(result => {
        res.redirect('/blogs');
    })
    .catch(err => {
        console.log(err);
    });

    }

const blogCreateGet = (req,res) => {
    res.render('create', { title: 'Create a new blog' });
    }

const blogIndexSort = (req,res) =>  {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
        res.render('index', { blogs: result, title: 'All blogs' });
        logger.info('Blog sorted');
        })
        .catch(err => {
        logger.error(err);
        });
    }

const blogCreate = (req,res) =>  {
    logger.info('logger123');
    const id = req.params.id;
    const blog = new Blog(req.body);
    blog.save()
        .then(result => {
        res.redirect('/blogs');
        logger.info('Blog successfully created');
        })
        .catch(err => {
        logger.error(err);
        });
    }
const blogIndex =(req,res) => {
    res.redirect('/blogs');
    }

module.exports = {
    blogAbout,
    blogDetails,
    blogDelete,
    blogEditGet,
    blogEdit,
    blogCreateGet,
    blogIndexSort,
    blogCreate,
    blogIndex
}