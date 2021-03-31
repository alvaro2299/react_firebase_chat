import React from 'react'
import {chatContext} from "../context/ChatProvider.js"

const Agregar = () => {
  
  const {agregarMensajes,usuario} = React.useContext(chatContext)
  const [mensaje,setMensaje] = React.useState('')
  const agregar = (e) => {
    e.preventDefault()
    if(!mensaje.trim()){
      console.log('viene vacio')
      return
    }
    else{
      agregarMensajes(usuario.uid,mensaje)
      console.log(usuario.uid,mensaje)
      setMensaje('')
    }
  }
  return (
    <form className="fixed-bottom p-3 bg-dark input-group" onSubmit={agregar}>
      <input className="form-control" text="text" value={mensaje} onChange={e => setMensaje(e.target.value)}/>
      <div className="input-group-append">
	<button className="bt btn-primary" type="submit">
	  Enviar
	</button>
      </div>
    </form>
  )
}
export default Agregar
