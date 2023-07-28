const storeControllers = require('../controllers/store.controller')

module.exports = (app)=>{
    // test the server 
    app.get('/api/test', storeControllers.Test)
    // findALL 
    app.get('/api/findAll',storeControllers.findALL)
    // Create
    app.post('/api/add',storeControllers.createOne)
    // GetOne 
    app.get('/api/:store_id',storeControllers.getOne)
    // UpdateOne
    app.put('/api/edit/:store_id',storeControllers.updateOne)
    // Delete One 
    app.delete('/api/delete/:store_id',storeControllers.deleteOne)
}