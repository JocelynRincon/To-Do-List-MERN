const mongoose=require('mongoose')

URI=('mongodb+srv://jocelyn_vanessa:jr07@sandbox.zwwon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(db=>console.log('base de datos conectada'))
.catch(error=>console.log(error))

module.exports=mongoose
