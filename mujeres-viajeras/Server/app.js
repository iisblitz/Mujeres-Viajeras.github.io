const express = require("express")
const {connectToDb, getDb} = require ('./db')
const {ObjectId} = require ('mongodb')

//init app and middleware
const app = express()
app.use(express.json)

// db connection
let db 

connectToDb((err)=>{
    if (!err){
        app.listen(3000, () => {
            console.log('app running on port 3000')
        })
        db = getDb()
    }
})

// routers
app.get('/Catalogo', (req, res) => {
  let viajes = []
    db.collection('Catalogo')

  .find() // returns cursor, no parameter return all, parameter filters results
  .sort({contacto: 1}) 
  .forEach(viaje=> viajes.push(viaje))
  .then(()=>{
    res.status(200).json(viajes)
  })
  .catch(()=>{
    res.status(500).json({error: 'couldn find docs'})
  })    
})

app.get('/Catalogo/:id', (req,res)=> {
  
    if(ObjectId.isValid(req.params.id)){
        db.collection('Catalogo')
        .findOne({_id: ObjectId(req.params.id)})
        .then(doc => {
          res.status(200).json(doc)
        })
        .catch(err=>{
          res.status(500).json({error: ' couldnt find single doc'})
        })
    }else{
        res.status(500).json({error: 'Not valid doc id'})
    }
  


    app.post('/Catalogo',(req,res)=> {
    const viaje = req.body

    db.collection('Catalogo')
        .insertOne(viaje)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Couldnt create new document'})
        })
    })


})
