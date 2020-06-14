import {Component} from '../core/component'
import {Form} from '../core/form'
import {Validators} from '../core/validators'

export class CreateComponent extends Component {
   constructor(id) {
      super(id)

   }

   init(){
      this.$el.addEventListener('submit', submitHandker.bind(this))

      this.form = new Form(this.$el, {
         title: [Validators.required],
         fulltext: [Validators.required, Validators.minLength(9)],
      })
   }
}


function submitHandker(event) {
   event.preventDefault()

   // если проходит валидацию
   if(this.form.isValid()){
      const formData = {
         type: this.$el.type.value,
         ...this.form.value()
      }
      this.form.clear()
      console.log('submit', formData)
   }
}