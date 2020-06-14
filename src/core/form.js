export class Form {
   constructor(form, control){
      this.form = form,
      this.control = control
   }

   value(){
      const value = {}

      Object.keys(this.control).forEach(control => {
         value[control] = this.form[control].value
      })
      return value
   }

   clear(){
      Object.keys(this.control).forEach(control => {
         this.form[control].value = ''
      })
   }

   isValid(){
      let isFormValid = true  // ставим флаг валидации формы true

      // перебераем валидаторы
      Object.keys(this.control).forEach(control => {
         const validators = this.control[control]

         let isValid = true
         validators.forEach(validator => {
            isValid = validator(this.form[control].value) && isValid // важно чтобы каждый валидатор был валидным
         });

         isValid ? clearError(this.form[control]) : setError(this.form[control])

         isFormValid = isFormValid && isValid
      })

      return isFormValid
   }
}


function setError($control){
   clearError($control)
   const error = `<p class="validation-error">Введите корректное значение</p>`
   $control.classList.add('invalid')
   $control.insertAdjacentHTML('afterend', error)
}

function clearError($control) {
   $control.classList.remove('invalid')

   if ($control.nextSibling){
      // находим родительский элемент и удаляем его потомка
      $control.closest('.form-control').removeChild($control.nextSibling)
   }
}