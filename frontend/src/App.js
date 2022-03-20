import React, {fragment, useState} from 'react';
import NavBar from './Componentes/BarraP';
import Login from './Componentes/Login'



function App() {

  const [usuario, inicioSesion] = useState({
    usuario: '',
    contraseña: ''
  })

  return (
    <fragment>
        <NavBar titulo='Inicio de Sesion'/>
        <div className='container center-h center-v'>
          <Login usuario = {usuario} inicioSesion = {inicioSesion}/>
        </div>
    </fragment>
  );
}

export default App;
