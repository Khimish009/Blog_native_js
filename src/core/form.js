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
      
   }


}