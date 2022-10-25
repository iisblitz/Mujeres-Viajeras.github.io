const router = require('express').Router();
let Catalog = require('../models/catalog.model');

router.route('/').get((req,res)=>{
    Catalog.find()
    .then(catalog => res.json(catalog))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const img = req.body.img;
    const cost = req.body.cost;
    const duration = req.body.duration;
    const rating = req.body.rating;
    const availability = req.body.availability;
    const classification = req.body.classification;
    const destiny = req.body.destiny;
    const services = req.body.services;
    const hotel = req.body.hotel;
    const zone = req.body.zone;
    const comments = req.body.comments;

    const newCatalog = new Catalog({
        title, 
        description, 
        img,
        duration,
        rating,
        availability,
        classification,
        destiny,
        services,
        hotel,
        zone,
        comments,
        cost
    });

    newCatalog.save()
    .then(()=>res.json('Travel added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});


router.route('/:id').get((req,res)=>{
    Catalog.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route('/:id').delete((req, res)=>{
    Catalog.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Post deleted'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req,res)=>{
    Catalog.findById(req.params.id)
    .then(travel=>{
        travel.title = req.body.title;
        travel.description = req.body.description;
        travel.img = req.body.img;
        travel.cost = req.body.cost;
        travel.duration = req.body.duration;
        travel.rating = req.body.rating
        travel.availability = req.body.availability
        travel.classification = req.body.classification
        travel.destiny = req.body.destiny
        travel.services = req.body.services
        travel.hotel = req.body.hotel
        travel.zone = req.body.zone
        travel.comments = req.body.comments

        travel.save()
        .then (()=> res.json('catalog updated'))
        .catch(err => res.status(400).json('Error: '+ err))
    })
    .catch(err => res.status(401).json('Error: ' + err))
})


module.exports= router;