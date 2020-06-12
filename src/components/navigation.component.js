import {Component} from '../core/component'

export class NavigationComponent extends Component {
   constructor(id){
      super(id)
   }

   init(){
      let tabs = this.$el.querySelectorAll('.tab')
      tabs.forEach(tab => {
         tab.addEventListener('click', () => {
            tab.classList.add('active')
         })
      })
   }
}


// function tabHandler() {
//    console.log(ss)
// }