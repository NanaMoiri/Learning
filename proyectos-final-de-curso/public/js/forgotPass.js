import vanillaValidatorJS from './vanillaValidatorJS.js';

const forgotPassForm = document.querySelector('.forgotPassForm');
forgotPassForm.setAttribute('novalidate', true);

forgotPassForm.addEventListener('submit', e => {

  e.preventDefault();

  const forgotPassFormValidated = vanillaValidatorJS(forgotPassForm, {
    rules: {
      forgotPassEmail: {
        required: true,
        email: true
      }
    }
  })

 // form validado correctamente 
 if(forgotPassFormValidated) {
  const formData = new FormData(forgotPassForm);
  let reqData = {};
  // rellena un objeto con los datos del form
  formData.forEach((value, key) => reqData[key] = value);
  // envio de los datos (JSON) al server mediante petición asíncrona "fetch"
  fetch('forgotPass', {
    method: 'POST',
    body: JSON.stringify(reqData),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(message => {
    document.querySelector('.response').textContent = message;
  })
  .catch(error => console.log(error))
}

})