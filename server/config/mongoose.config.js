const mongoose = require ('mongoose')
const collection = "storeFinder"
mongoose.connect(`mongodb://127.0.0.1:27017/${collection}`)
.then(res => {
    console.log('Mongoose connection established',mongoose.connection.name)
})
.catch(err =>{
    console.log('Mongoose connection - Error: ',err)
})