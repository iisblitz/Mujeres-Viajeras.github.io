const router = require('express').Router();
let Blog = require('../models/blog.model');

router.route('/').get((req,res)=>{
    Blog.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req,res)=>{
    const userName = req.body.userName;
    const travel = req.body.travel;
    const rating = req.body.rating;
    const likes = req.body.likes;
    const comments = req.body.comments;

    const newPost = new Blog({
        userName,
        travel,
        rating,
        likes,
        comments
    });

    newPost.save()
    .then(()=>res.json('Posted!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').get((req,res)=>{
    Blog.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route('/:travel').get((req,res)=>{
    Blog.findById(req.params.travel)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route('/:userName').get((req,res)=>{
    Blog.findById(req.params.userName)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route('/:id').delete((req, res)=>{
    Blog.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Post deleted'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req,res)=>{
    Blog.findById(req.params.id)
    .then(post=>{
        post.userName = req.body.userName? req.body.userName: post.userName;
        post.travel = req.body.travel? req.body.travel: post.travel; 
        post.rating = req.body.rating?req.body.rating: post.rating;
        post.likes = req.body.likes?req.body.likes:post.likes;
        post.comments = req.body.comments?req.body.comments:post.comments;

        post.save()
        .then (()=> res.json('post updated'))
        .catch(err => res.status(400).json('Error: '+ err))
    })
    .catch(err => res.status(401).json('Error: ' + err))
})

module.exports= router;