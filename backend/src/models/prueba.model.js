const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const ToDoSchema= new Schema ({
    name: {
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true
    }
     },
    {
        timestamps:true
    } 
     )

     const ToDo =mongoose.model('todo', ToDoSchema)

     module.exports=ToDo