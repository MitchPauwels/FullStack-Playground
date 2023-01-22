const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');
// const User = require('../models/User');

router.get('/', (req, res) => {
    // code to handle displaying a list of all blog posts
    BlogPost.find({}, (err, blogposts) => {
        if(err) {
            console.log(err);
        } else {
            res.render('index', {blogposts: blogposts});
        }
    });
});

router.get('/post/:id', (req, res) => {
    // code to handle displaying a single blog post
    // BlogPost.findById(req.params.id, (err, foundPost) => {
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         res.render('show', {post: foundPost});
    //     }
    // });
});

router.post('/post', (req, res) => {
    // code to handle creating a new blog post
    // let title = req.body.title;
    // let content = req.body.content;
    // let newPost = {
    //     title: title,
    //     content: content
    // }
    // BlogPost.create(newPost, (err, newlyCreated) => {
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         res.redirect('/');
    //     }
    // });
});

router.put('/post/:id', (req, res) => {
    // code to handle editing an existing blog post
    // let title = req.body.title;
    // let content = req.body.content;
    // let updatedPost = {
    //     title: title,
    //     content: content
    // }
    // BlogPost.findByIdAndUpdate(req.params.id, updatedPost, (err, updatedPost) => {
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         res.redirect('/');
    //     }
    // });
});

router.delete('/post/:id', (req, res) => {
    // code to handle deleting a blog post
    // BlogPost.findByIdAndRemove(req.params.id, (err) => {
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         res.redirect('/');
    //     }
    // });
});

module.exports = router;
