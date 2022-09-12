import vanillaValidatorJS from './vanillaValidatorJS.js';

//AÑADIR / UPDATE DATOS DE USUARIO
const userDataEditForm = document.querySelector('#userDataEditForm');
let changes = false;
userDataEditForm.addEventListener("input", () => {
  changes = true;
});
userDataEditForm.addEventListener("textarea", () => {
  changes = true;
});
if (userDataEditForm.nombre.value === "" || userDataEditForm.apellidos.value === "" || userDataEditForm.edad.value === null || userDataEditForm.altura.value === null){
  userDataEditForm.setAttribute('novalidate', true);
  userDataEditForm.addEventListener('submit', e => {
    e.preventDefault();
    if (changes) {
      const userDataEditFormValidated = vanillaValidatorJS(userDataEditForm, {
        rules: {
          nombre_de_usuario: {
            required: true,
            minlength: 1,
            maxlength: 30
          },
          nombre: {
            required: true,
            minlength: 1,
            maxlength: 30
          },
          apellidos: {
            required: true,
            minlength: 1,
            maxlength: 30
          },
          edad: {
            required: true,
            minlength: 1
          },
          altura: {
            required: true,
            minlength: 1
          }
        }
      })
      // formulario validado correctamente
      if (userDataEditFormValidated) {
        const formData = new FormData(userDataEditForm);
        let reqData = {};
        //rellenamos el objeto con los datos del form
        formData.forEach((value, key) => { reqData[key] = value; });
        // UPDATE enviamos los datos JSON al servidor usando asincronía FETCH
        fetch('user_page/edit', {
          method: 'PUT',
          body: JSON.stringify(reqData),
          headers: { 'Content-Type': 'application/json' },
        })
          .then(response => response.json())
          .then(message => {
            alert('Datos de usuario editados correctamente');
            // location.reload();
          })
          .catch(error => console.log(error))
      } else {
        alert('No se han encontrado cambios');
      }
    }
  })
} else {
  userDataEditForm.setAttribute('novalidate', true);
  userDataEditForm.addEventListener('submit', e => {
    e.preventDefault();
    if (changes) {
      const userDataEditFormValidated = vanillaValidatorJS(userDataEditForm, {
        rules: {
          nombre_de_usuario: {
            required: true,
            minlength: 1,
            maxlength: 30
          },
          nombre: {
            required: true,
            minlength: 1,
            maxlength: 30
          },
          apellidos: {
            required: true,
            minlength: 1,
            maxlength: 30
          },
          edad: {
            required: true,
            minlength: 1
          },
          altura: {
            required: true,
            minlength: 1
          }
        }
      })
      // formulario validado correctamente
      if (userDataEditFormValidated) {
        const formData = new FormData(userDataEditForm);
        let reqData = {};
        //rellenamos el objeto con los datos del form
        formData.forEach((value, key) => { reqData[key] = value; });
        // UPDATE enviamos los datos JSON al servidor usando asincronía FETCH
        fetch('user_page/edit', {
          method: 'PUT',
          body: JSON.stringify(reqData),
          headers: { 'Content-Type': 'application/json' },
        })
          .then(response => response.json())
          .then(message => {
            alert('Datos de usuario editados correctamente');
            // location.reload();
          })
          .catch(error => console.log(error))
      } else {
        alert('No se han encontrado cambios');
      }
    }
  })
}
  