const PruebaCtrl={}
const Tarea=require('../models/prueba.model')

PruebaCtrl.obtener=(req,res)=>{
    res.send('funcionando desde get')
}

PruebaCtrl.crear=(req,res)=>{
    res.send('funcionando desde post')
}

PruebaCtrl.actualizar=(req,res)=>{
    res.send('funcionando desde put')
}

PruebaCtrl.eliminar=(req,res)=>{
    res.send('funcionando desde delete')
}


module.exports=PruebaCtrl