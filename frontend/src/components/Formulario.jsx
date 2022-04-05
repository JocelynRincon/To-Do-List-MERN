import React, { useState } from 'react'

export default function Formulario() {

    const [nombre, setNombre]=useState('')
    const [descripcion, setDescripcion]=useState('')

  return (

    <div className='container col-md-3 mt-5'>
      <h1 className='text-primary'>To Do List</h1>
        <form>
  <div className="mb-3">
    <input type="text" className="form-control" required placeholder='Nombre'onChange={e=>setNombre(e.target.value)} />
  </div>
  <div className="mb-3">
    <input type="text" className="form-control" required placeholder='Descripción'onChange={e=>setDescripcion(e.target.value)}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Realizada</label>
  </div>
  <button type="submit" className="btn btn-primary">Guardar</button>
</form>
        
    </div>
  )
}
