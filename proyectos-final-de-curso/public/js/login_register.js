import vanillaValidatorJS from './vanillaValidatorJS.js';

const signUpForm = document.querySelector('.signUpForm');
signUpForm.setAttribute('novalidate', true);

signUpForm.addEventListener('submit', e => {

  e.preventDefault();

  const signUpFormValidated = vanillaValidatorJS(signUpForm, {
    rules: {
      nombre: {
        required: true,
        minlength: 1,
        maxlength: 20
      },
      signUpEmail: {
        required: true,
        email: true
      },
      pass1: {
        required: true,
        minlength: 6
      },
      pass2: {
        required: true,
        equalTo: 'pass1'
      }
    }
  })

  if(signUpFormValidated){
    const formData = new FormData(signUpForm)
    let reqData = {};
    //rellenar el objeto con los datos del form
    formData.forEach((value, key) =>{reqData[key] = value;});
    //enviar los datos JSON al server mediante fetch
    fetch('login_register/signUp', {
      method: 'POST',
      body: JSON.stringify(reqData),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(message => {
      document.querySelector('.response').textContent = message;
    })
    .catch(error => console.log(error))
  }
})

const signInForm = document.querySelector('.signInForm');
signInForm.setAttribute('novalidate', true);

signInForm.addEventListener('submit', e => {

  e.preventDefault();

  const signInFormValidated = vanillaValidatorJS(signInForm, {
    rules: {
      signInEmail: {
        required: true,
        email: true
      },
      pass: {
        required: true,
      }
    }
  })

  if(signInFormValidated){
    const formData = new FormData(signInForm)
    let reqData = {};
    //rellenar el objeto con los datos del form
    formData.forEach((value, key) =>{reqData[key] = value;});
    //enviar los datos JSON al server mediante fetch
    fetch('login_register/logIn', {
      method: 'POST',
      body: JSON.stringify(reqData),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(message => {
      document.querySelector('.response2').textContent = message;
      if (message === 'Datos de entrada correctos!') {
        setTimeout(() => {
          location.href ='/user_page'; 
        }, 1000);
      }
    })
    .catch(error => console.log(error))
  }
})
