//Importar modulos de react / dependencias
import React from "react";

//Funcion del componente
//Ejemplo uno
const MiComponenete = () => {

  let curso = "mola mazo";

  return (
    <div className="mi-componente">
      <hr />
        <h2>Componente Creado</h2>
        <p>Este es el componente </p>
        <ul>
          <li>
            React: {curso}
          </li>
          <li>
            Angular
          </li>
          <li>
            Vue
          </li>
        </ul>
    </div>

  )
};

//Export

export default MiComponenete;
