import React from 'react'
import {db,auth,provider} from "../firebase"
export const chatContext = React.createContext()
const ChatProvider = (props) => {
  const dataUsuario = {
    uid:null,
    email:null,
    estado:null
  }
  const [usuario,setUsuario] = React.useState(dataUsuario)
  const [mensajes,setMensajes] = React.useState([])
  React.useEffect(() => {
    detectarUsuario()
  },[])

  const detectarUsuario = () => {
    auth.onAuthStateChanged(user => {
      if(user){
	setUsuario({
	  uid:user.uid,
	  email:user.email,
	  estado:true
	})
	cargarMensajes()
      }else{
	setUsuario({
	  uid:null,
	  email:null,
	  estado:false
	})
      }
    })
  }
  const ingresoUsuario = async() => {
    try {
      await auth.signInWithPopup(provider)
    }catch(error){
      console.log(error)
    }
  } 
  const cerrarSesion = () => {
    auth.signOut()
  }
  const cargarMensajes = () => {
    db.collection('chat').orderBy("fecha").onSnapshot(query => {
      const arrayMensajes = query.docs.map(i => i.data())
      setMensajes(arrayMensajes)
    })
  }
  const agregarMensajes = async(uidChat,textoinput) => {
    try{
      await db.collection('chat').add({
	fecha:Date.now(),
	text:textoinput,
	uid:uidChat
      })
    }catch(error){
      console.log(error)
    }
  }

  return (
    <chatContext.Provider value={{usuario,ingresoUsuario,cerrarSesion,mensajes,agregarMensajes}}>
      {props.children}
    </chatContext.Provider>
  )
}
export default ChatProvider
