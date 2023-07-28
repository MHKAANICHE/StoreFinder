const express = require('express')
const cors = require ('cors')
const app = express()
const port = 8000

app.use(cors(), express.json(), express.urlencoded({extends : true}))

require ('./config/mongoose.config')
require ('./routes/store.routes')(app)
app.listen(port, ()=>{console.log(`Express Server - connection established - fired at port : ${port}`)})
