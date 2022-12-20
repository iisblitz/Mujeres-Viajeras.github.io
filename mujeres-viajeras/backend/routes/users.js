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
    const age = req.body.age;
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
        user.userName = req.body.userName?req.body.userName:user.userName;
        user.name = req.body.name?req.body.name:user.name;
        user.Password = req.body.Password?req.body.Password:user.Password;
        user.lastName = req.body.lastName?req.body.lastName:user.lastName;
        user.age = req.body.age?req.body.age:user.age;
        user.origin = req.body.origin?req.body.origin:user.origin;
        user.email = req.body.email?req.body.email:user.email;
        user.telephone = req.body.telephone?req.body.telephone:user.telephone;
        user.imgPic = req.body.imgPic?req.body.imgPic:user.imgPic;
        user.travels = req.body.travels?req.body.travels:user.travels;
        user.favorites = req.body.favorites?req.body.favorites:user.favorites;
        
        user.save()
        .then (()=> res.json('user updated'))
        .catch(err => res.status(400).json('Error: '+ err))
    })
    .catch(err => res.status(401).json('Error: ' + err))
})




module.exports= router;