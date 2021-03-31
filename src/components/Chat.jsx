import React from 'react'
import Agregar from './Agregar'
import {chatContext} from '../context/ChatProvider.js'
const Chat = () => {

  const {mensajes,usuario} = React.useContext(chatContext)
  const refZonaChat = React.useRef(null)
  React.useEffect(() => {
    console.log(refZonaChat)
    refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight
  },[mensajes])
  return (
    <div className="px-2 mt-3" 
	 style={{height:'80vh',overflowY:'scroll'}}
	 ref={refZonaChat}
    >
      {mensajes.map((i,key) => (
	usuario.uid === i.uid ? (
      <div key={key} className="d-flex justify-content-end mb-2">
	<p className="badge badge-pill badge-primary">
	  {i.text}  	
	</p>
      </div>
) : (
	<div key={key} className="d-flex justify-content-start mb-2">
	<p className="badge badge-pill badge-dark">
	  {i.text}
	</p>
      </div>
)
      ))}
            <Agregar />
    </div>
  )
}
export default Chat
