
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://himanshukushwaha71855:hd4Jo965gUv4Nd7T@himanshuapi.jywts.mongodb.net/Hotel-Booking',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>{
    console.log('connecton is Successful Database');
}).catch((e) =>{
    console.log('Not Connected Database')
})

  

   

// var connec =  mongoose.connection;

// connec.on('error', () =>{
//     console.log('MongoDb Connection failed')
// })

// connec.on('connection', ()=>{
//     console.log('Mongo Db Connection Successful')
// })

module.exports = mongoose




// hd4Jo965gUv4Nd7T