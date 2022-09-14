import React, { useState } from 'react'

export const FormularioComponent = () => {

  const [usuario, setUsuario] = useState([]);

  const conseguirDatosFormulario = e => {
    e.preventDefault();

    let datos = e.target;
    // console.log(datos.nombre.value);
    let usuario = {
      nombre: datos.nombre.value,
      apellidos: datos.apellidos.value,
      sexo: datos.sexo.value,
      bio: datos.biografia.value,
      enviar: datos.enviar.value
    };

    setUsuario(usuario);
  }

  const cambiarDatos = e => {
    let name_del_input = e.target.name;
    let usuario_para_modificar = usuario;

    //usuario_para_modificar[name_del_input] = e.target.value;

    setUsuario(estado_previo => ({
        ...estado_previo,
        [name_del_input]: e.target.value
      }));
  }

  return (
    <div>
      <h1>Formularios con React</h1>

      { usuario.enviar &&
        (
        <div className='info_usuario'>
          {usuario.nombre} {usuario.apellidos} su sexo es {usuario.sexo} y su biografía es: 
          <p>{usuario.bio}</p>
        </div>
        )
      }

      <form onSubmit={conseguirDatosFormulario}>
        <input type="text" placeholder='nombre' name="nombre" onChange={cambiarDatos}/>
        <input type="text" placeholder='apellidos' name="apellidos" onChange={cambiarDatos} />
        <select name="sexo" onChange={cambiarDatos}>
          <option value="mujer" >Mujer</option>
          <option value="hombre" >Hombre</option>
        </select>
        <textarea placeholder='biografía'name="biografia" onChange={cambiarDatos}></textarea>
        <input type="submit" value="Enviar" name="enviar"/>
      </form>
    </div>
  )
}
