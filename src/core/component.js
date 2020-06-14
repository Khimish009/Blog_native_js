export class Component {
  constructor(id){
    this.$el = document.getElementById(id)
    this.init()
  }

  init(){}

  onShow(){}

  onHide(){}

  hide(){
    this.onHide()
    this.$el.classList.add('hide')
  }

  show() {
    this.onShow()
    this.$el.classList.remove('hide')
  }
}