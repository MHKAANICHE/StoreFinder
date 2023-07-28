const {Store} = require ('../models/store.model')

module.exports.Test = (req, res) =>{
    res.json('Controllers - Test sucessful')
}

// CRUD 

// Get ALL 
module.exports.findALL = (req, res)=>{
    Store.find()
    .then(store=>{
        res.status(200).json(store)
    })
    .catch(err=>{
        res.status(400).json({message:'findAll - Error ',err})
    })
}

// Create
module.exports.createOne = (req,res)=>{
    Store.create(req.body)
    .then(store =>{
        res.status(200).json(store)
    })
    .catch(err =>{
        res.status(400).json({message:'Create - Error ',err})
    })
}

// Get One
module.exports.getOne =(req,res)=>{
    Store.findOne({_id: req.params.store_id})
    .then(store=>{
        res.status(200).json(store)
    })
    .catch(err=>{
        res.status(400).json({message : 'GetOne - Error : ',err})
    })
}

// UpdateOne
module.exports.updateOne = (req,res)=>{
    Store.findOneAndUpdate(
        {_id : req.params.store_id},
        req.body,
        {new: true , runValidators : true})
    .then(store =>{
        res.status(200).json(store)
    })
    .catch(err =>{
        res.status(400).json({message :'UpdateOne - Error :',err})
    })
}

// DeleteOne 
module.exports.deleteOne = (req,res) =>{
    Store.deleteOne({_id : req.params.store_id})
    .then(mssg=>{
        res.status(200).json({mssg})
    })
    .catch(err=>{
        res.status(400).json({message:'DeleteOne - Error',err})
    })
}