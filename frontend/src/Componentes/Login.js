import React from 'react';

const login = ({usuario, iniciarSesion}) => {

    const handleChange = e =>{
        iniciarSesion({
            [e.target.name]: e.target.value
        });
    }

    return (
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">Registro Academico</label>
                <input name = 'usuario' onChange={handleChange} type="User" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text"></div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                <input name = 'password' onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
            <button type="submit" className="btn btn-link">¿Has olvidado la contraseña?</button>
        </form>
    );
}
export default login;