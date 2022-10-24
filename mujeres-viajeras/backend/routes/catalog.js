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
    const cost = req.body.cost;
    
    const newCatalog = new catalog({title, description, cost});

    newCatalog.save()
    .then(()=>res.json('Travel added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

module.exports= router;