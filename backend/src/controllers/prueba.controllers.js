const PruebaCtrl={}
const Tarea=require('../models/prueba.model')

PruebaCtrl.obtener=(req,res)=>{
    res.send('funcionando desde get')
}

PruebaCtrl.crear=async(req,res)=>{
    const {nombre, descripcion}=req.body
    const NuevoRegistro=new Tarea( {
        nombre,
        descripcion
    })
    await NuevoRegistro.save()
    res.json({
        mensaje: 'Tarea Guardada'
    })
 }

PruebaCtrl.actualizar=(req,res)=>{
    res.send('funcionando desde put')
}

PruebaCtrl.eliminar=(req,res)=>{
    res.send('funcionando desde delete')
}


module.exports=PruebaCtrl