const vanillaValidatorJS = (form, rules) => {

  const CONFIG = {
    errorStyle: '3px solid #fe6a6a',
    emptyMessage: 'Campo requerido',
    incorrectMessage: 'Campo con formato incorrecto',
    validated: true
  }

  Object.entries(rules).forEach(([key, allRules]) => {
    Object.entries(allRules).forEach(([name, fieldRules]) => {

      const fieldsName = document.getElementsByName(name)
      const emailREGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
      reset(fieldsName)

      fieldsName.forEach(field => {
        if (fieldRules.required && field.value.length === 0) {
          field.style.borderBottom = CONFIG.errorStyle
          insertAfterMessage(field, CONFIG.emptyMessage)
          CONFIG.validated = false
        }
        if (field.value.length !== 0) {
          if (field.value.length < fieldRules.minlength ||
            field.value.length > fieldRules.maxlength ||
            !emailREGEXP.test(field.value) && fieldRules.email ||
            field.value < fieldRules.min ||
            field.value > fieldRules.max ||
            fieldRules.equalTo && field.value !== document.getElementsByName(fieldRules.equalTo)[0].value
          ) {
            field.style.borderBottom = CONFIG.errorStyle
            insertAfterMessage(field, CONFIG.incorrectMessage)
            CONFIG.validated = false
          }
        }

      })

    })
  })

  if (CONFIG.validated) {
    return true
  }
  return false
}

const insertAfterMessage = (field, message) => {
  const span = document.createElement('span')
  span.style.display = 'block'
  span.style.marginBottom = '10px'
  span.style.color = '#fe6a6a'
  span.style.fontSize = '12px'
  span.style.fontStyle = 'italic'
  span.textContent = message
  if (field.nextSibling) {
    field.parentNode.insertBefore(span, field.nextSibling)
  } else { field.parentNode.appendChild(span) }
}

const reset = (fieldsName) => {
  fieldsName.forEach(field => {
    field.style.borderBottom = '0'
    if (field.nextSibling.tagName === 'SPAN') {
      field.parentNode.removeChild(field.nextSibling)
    }
  })
}

export default vanillaValidatorJS