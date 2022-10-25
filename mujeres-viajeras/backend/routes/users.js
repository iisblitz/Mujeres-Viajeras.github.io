const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req,res)=>{
    const userName = req.body.userName;
    const name = req.body.name;
    const lastName = req.body.lastName;
    const age = req.body.Age;
    const origin = req.body.origin;
    const email = req.body.email;
    const telephone = req.body.telephone;
    const imgPic = req.body.imgPic;
    const travels = req.body.travels;
    const favorites= req.body.favorites;
    const Password = req.body.Password; 


    const newUser = new User({
        userName,
        name,
        lastName,
        age,
        origin,
        email,
        telephone,
        imgPic,
        travels,
        favorites,
        Password
    });

    newUser.save()
    .then(()=>res.json('User added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').get((req,res)=>{
    User.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route('/:id').delete((req, res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Post deleted'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req,res)=>{
    User.findById(req.params.id)
    .then(user=>{
        user.userName = req.body.userName;
        user.name = req.body.name
        user.Password = req.body.Password;
        user.lastName = req.body.lastName;
        user.age = req.body.age;
        user.origin = req.body.origin;
        user.email = req.body.email;
        user.telephone = req.body.telephone;
        user.imgPic = req.body.imgPic;
        user.travels = req.body.travels;
        user.favorites = req.body.favorites;
        
        user.save()
        .then (()=> res.json('user updated'))
        .catch(err => res.status(400).json('Error: '+ err))
    })
    .catch(err => res.status(401).json('Error: ' + err))
})




module.exports= router;