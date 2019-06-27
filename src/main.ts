import { sayHello } from './greet';
import data from './data'

class ST {

  id: string;
  el: any;
  constructor(id: string) {
    this.id = id
    this.el = document.getElementById(this.id)
  }

  init():void {
    this.renderTable()
    this.onScroll()
  }

  renderTable():void {
    let html:string = ''
    data.forEach(item => {
      html += this.getTemplate(item)
    })
    this.el.innerHTML = html
  }

  getTemplate(item: any): string {
    return `<div class="tb-row">
    <div class="tb-row-item">${item.id}</div>
    <div class="tb-row-item">${item.name}</div>
    <div class="tb-row-item">${item.label}</div>
    <div class="tb-row-item">${item.position}</div>
  </div>`
  }

  onScroll():void {
    this.el.addEventListener('scroll', function(e: any) {
      console.log(e);
    })
  }

}

const st = new ST('table')

st.init()