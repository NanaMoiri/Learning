const button = document.querySelectorAll('button');
//CALCULADORA BMR
let sexo = document.getElementsByName('sexo');
let edad = document.getElementById('edad');
let altura_tmb = document.getElementById('altura1');
let peso_tmb = document.getElementById('peso1');
let actividad = document.getElementsByName('actividad');
let tmb = document.getElementById('tmb');
button[0].addEventListener('click', () => {
  let sexo2;
  let peso_tmb2 = peso_tmb.value;
  let altura_tmb2 = altura_tmb.value;
  let edad2 = edad.value;
  let actividad2;

  for (let i = 0, length = sexo.length; i < length; i++) {
    if (sexo[i].checked) { sexo2 = sexo[i].value; break; }
  }
  for (let i = 0, length = actividad.length; i < length; i++) {
    if (actividad[i].checked) { actividad2 = actividad[i].value; break; }
  }

  if (sexo2 === 'mujer') {
    let tmb_calc;
    switch (actividad2) {
      case 'sedentario':
        tmb_calc = (((655 + (9.6 * peso_tmb2)) + (1.8 * altura_tmb2)) - (4.7 * edad2)) * 1.2;
        tmb.value = tmb_calc.toFixed(2);
        break;
      case 'ligero':
        tmb_calc = (((655 + (9.6 * peso_tmb2)) + (1.8 * altura_tmb2)) - (4.7 * edad2)) * 1.375;
        tmb.value = tmb_calc.toFixed(2);
        break;
      case 'activo':
        tmb_calc = (((655 + (9.6 * peso_tmb2)) + (1.8 * altura_tmb2)) - (4.7 * edad2)) * 1.55;
        tmb.value = tmb_calc.toFixed(2);
        break;
      case 'muy_activo':
        tmb_calc = (((655 + (9.6 * peso_tmb2)) + (1.8 * altura_tmb2)) - (4.7 * edad2)) * 1.72;
        tmb.value = tmb_calc.toFixed(2);
        break;
      default:
        break;
    }
  } else {
    let tmb_calc;
    switch (actividad2) {
      case 'sedentario':
        tmb_calc = (((66 + (13.7 * peso_tmb2)) + (5 * altura_tmb2)) - (6.75 * edad2)) * 1.2;
        tmb.value = tmb_calc.toFixed(2);
        break;
      case 'ligero':
        tmb_calc = (((66 + (13.7 * peso_tmb2)) + (5 * altura_tmb2)) - (6.75 * edad2)) * 1.375;
        tmb.value = tmb_calc.toFixed(2);
        break;
      case 'activo':
        tmb_calc = (((66 + (13.7 * peso_tmb2)) + (5 * altura_tmb2)) - (6.75 * edad2)) * 1.55;
        tmb.value = tmb_calc.toFixed(2);
        break;
      case 'muy_activo':
        tmb_calc = (((66 + (13.7 * peso_tmb2)) + (5 * altura_tmb2)) - (6.75 * edad2)) * 1.72;
        tmb.value = tmb_calc.toFixed(2);
        break;
      default:
        break;
    }
  }
})


//CALCULADORA IMC
let altura_imc = document.getElementById('altura2');
let peso_imc = document.getElementById('peso2');
let imc_calc = document.getElementById('imc');

button[1].addEventListener('click', () => {
  let altura_imc2 = altura_imc.value;
  let peso_imc2 = peso_imc.value;
  const cuadrado_altura = (altura_imc2 / 100) * (altura_imc2 / 100);
  const calculo_imc = peso_imc2 / cuadrado_altura;
  console.log(imc_calc)
  imc_calc.value = calculo_imc.toFixed(2);
})
