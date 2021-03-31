import React from 'react'
import Chat from './components/Chat.jsx'
import Navbar from './components/Navbar.jsx'
import {chatContext} from './context/ChatProvider.js'
const App = () => {

  const {usuario} = React.useContext(chatContext)
  return usuario !== null ? (
    <div>
      <Navbar />
      {
	usuario.estado ? (
	  <Chat />
	) : (
	  <div className="lead text-center mt-5">Debes iniciar sesion</div>
	)
      }
    </div>
  ) : (<div>Cargando ...</div>)
 
}

export default App
