import vanillaValidatorJS from './vanillaValidatorJS.js';

const statsForm = document.querySelector('#statsform');
const addImgForm = document.querySelector('.addImageForm');
const addImgForm2 = document.querySelector('.addImageForm2');

//FORM STATS
statsForm.setAttribute('novalidate', true);
statsForm.addEventListener('submit', e => {
  e.preventDefault();

  const statsFormValidated = vanillaValidatorJS(statsForm, {
    rules: {
      peso: {
        required: true,
        minlength: 2
      },
      imc: {
        required: true,
        minlength: 2
      },
      bmr: {
        required: true,
        minlength: 2
      }
    }
  })
  if(statsFormValidated) {
    const formData = new FormData(statsForm);
    let reqData = {}
    //enviamos los datos JSON al server con Asinc FETCH
    formData.forEach((value, key) =>{reqData[key] = value;});
    fetch('progress/stats', {
      method: 'POST',
      body: JSON.stringify(reqData),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(message => {
      alert (message);
      location.reload();
    })
    .catch(error => console.log(error))
  }
})

//FORM ANTES
addImgForm.setAttribute('novalidate', true);
addImgForm.addEventListener('submit', e => {
  
  e.preventDefault();

  const addImgFormValidated = vanillaValidatorJS(addImgForm, {
    rules: {
      addImagAntDel: {
        required: true
      },
      addImagAntDet: {
        required: true
      }
    }
  })
  //si esta validad correctamente
  if(addImgFormValidated) {
    const formData = new FormData(addImgForm);
    //enviamos los datos JSON al server con Asinc FETCH
    fetch('progress/add', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(message => {
      alert (message);
      location.reload();
    })
    .catch(error => console.log(error))
  }
})
//FORM DESPUES
addImgForm2.setAttribute('novalidate', true);
addImgForm2.addEventListener('submit', e => {
  
  e.preventDefault();

  const addImg2FormValidated = vanillaValidatorJS(addImgForm2, {
    rules: {
      addImagDesDel: {
        required: true
      },
      addImagDesDet: {
        required: true
      }
    }
  })
  //si esta validad correctamente
  if(addImg2FormValidated) {
    const formData = new FormData(addImgForm2);
    //enviamos los datos JSON al server con Asinc FETCH
    fetch('progress/add2', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(message => {
      alert (message);
      location.reload();
    })
    .catch(error => console.log(error))
  }
})






































// FUNCION LIMPIAR
function clearDiv() {
  while (section.firstChild) {
    section.removeChild(section.firstChild)
  }
}

//FUNCION GRAFICO 
// function creargrafico() {
//   const div1 = document.createElement('div');
//   section.appendChild(div1);
//   const canvas = document.createElement('canvas');
//   canvas.setAttribute('id', 'grafico');
//   div1.appendChild(canvas);

//   const ctx = document.getElementById('grafico');
//   const myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)'
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
// };
//FUNCION PROGRESO

//FUNCION DATOS PERSONALES
// // function ShowPersonalInfo() {
  
// //   if (!document.getElementById('titulo')) {
// //     const h1 = document.createElement('h1');
// //     h1.setAttribute('id', 'titulo')
// //     h1.textContent = "DATOS PERSONALES";
// //     section.appendChild(h1);
// //   }
// //   //Nombre Usuario
// //   if (!document.getElementById('user_name')) {
// //     const div1 = document.createElement('div');
// //     section.appendChild(div1);
// //     const label_user_name = document.createElement('label');
// //     label_user_name.setAttribute('for', 'user_name');
// //     const label_user_name_text = document.createTextNode('Nombre de Usuario');
// //     label_user_name.appendChild(label_user_name_text);
// //     div1.appendChild(label_user_name);
// //     const input_user_name = document.createElement('input');
// //     input_user_name.setAttribute('id', 'user_name');
// //     input_user_name.setAttribute('type', 'text');
// //     div1.appendChild(input_user_name);
// //   }
// //   //Nombre
// //   if (!document.getElementById('nombre')) {
// //     const div2 = document.createElement('div');
// //     section.appendChild(div2);
// //     const label_nombre = document.createElement('label');
// //     label_nombre.setAttribute('for', 'nombre');
// //     const label_nombre_text = document.createTextNode('Nombre');
// //     label_nombre.appendChild(label_nombre_text);
// //     div2.appendChild(label_nombre);
// //     const input_nombre = document.createElement('input');
// //     input_nombre.setAttribute('id', 'nombre');
// //     input_nombre.setAttribute('type', 'text');
// //     div2.appendChild(input_nombre);
// //   }
// //   //Apellidos
// //   if (!document.getElementById('apellidos')) {
// //     const div3 = document.createElement('div');
// //     section.appendChild(div3);
// //     const label_apel = document.createElement('label');
// //     label_apel.setAttribute('for', 'apellidos');
// //     const label_apel_text = document.createTextNode('Apellidos');
// //     label_apel.appendChild(label_apel_text);;
// //     div3.appendChild(label_apel);
// //     const input_apel = document.createElement('input');
// //     input_apel.setAttribute('id', 'apellidos');
// //     input_apel.setAttribute('type', 'text');
// //     div3.appendChild(input_apel);
// //   }
// //   //Edad
// //   if (!document.getElementById('edad')) {
// //     const div4 = document.createElement('div');
// //     section.appendChild(div4);
// //     const label_edad = document.createElement('label');
// //     label_edad.setAttribute('for', 'edad');
// //     const label_edad_text = document.createTextNode('Edad');
// //     label_edad.appendChild(label_edad_text);
// //     div4.appendChild(label_edad);
// //     const input_edad = document.createElement('input');
// //     input_edad.setAttribute('id', 'edad');
// //     input_edad.setAttribute('type', 'number');
// //     div4.appendChild(input_edad);
// //   }
// //   //Altura
// //   if (!document.getElementById('altura')) {
// //     const div5 = document.createElement('div');
// //     section.appendChild(div5);
// //     const label_altura = document.createElement('label');
// //     label_altura.setAttribute('for', 'altura');
// //     const label_altura_text = document.createTextNode('Altura');
// //     label_altura.appendChild(label_altura_text);
// //     div5.appendChild(label_altura);
// //     const input_altura = document.createElement('input');
// //     input_altura.setAttribute('id', 'altura');
// //     input_altura.setAttribute('type', 'number');
// //     div5.appendChild(input_altura);
// //     //Botone Guardar
// //     if (!document.getElementById('guardar')) {
// //       const div6 = document.createElement('div');
// //       section.appendChild(div6);
// //       const btn_guardar = document.createElement('button');
// //       btn_guardar.setAttribute('id', 'guardar')
// //       btn_guardar.setAttribute('type', 'submit');
// //       btn_guardar.textContent = "Guardar";
// //       div6.appendChild(btn_guardar);
// //     }
// //   }
// // }

// export default myChart;