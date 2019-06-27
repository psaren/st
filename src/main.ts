import { sayHello } from './greet';
import {data, Item} from './data'

class ST {

  id: string;
  el: any;
  body: HTMLElement;
  topHolder: HTMLElement;
  rowHeight: number;
  constructor(id: string, rowHeight?: number) {
    this.id = id
    this.el = document.getElementById(this.id)
    this.rowHeight = rowHeight || 34;
  }

  init():void {
    this.setContainerHeight()
    const num: number = this.visibleDataCount()
    this.renderTable(data.slice(0, num + 5))
    this.onScroll()
  }

  renderTable(tableData: Item[]):void {
    let html:string = ''
    tableData.forEach(item => {
      html += this.getTemplate(item)
    })
    this.body.querySelector('.st-body-content').innerHTML = html
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
    const _this = this
    this.el.addEventListener('scroll', function(e: any) {
      const _scrollTop = e.target.scrollTop
      const _content: HTMLElement = _this.body.querySelector('.st-body-content')
      _content.style.top = _scrollTop + 'px'
      const _data: Item[] = _this.getVisibleData(_scrollTop)
      _this.renderTable(_data)
    })
  }

  getElement(cls: string, tag: string = 'div') {
    const _el: HTMLElement = document.createElement(tag)
    if(cls !== '') {
      _el.className = cls
    }
    return _el
  }

  setContainerHeight() {
    const _body: HTMLElement = this.getElement('st-body')
    const _content: HTMLElement = this.getElement('st-body-content')
    
    const fragment = document.createDocumentFragment()

    _body.style.height = data.length * 34 + 'px'
    fragment.appendChild(_content)
    _body.appendChild(fragment)
    this.el.appendChild(_body) 
    this.body = this.el.querySelector('.st-body')
    this.topHolder = this.body.querySelector('.st-body-holder')
  }

  visibleDataCount():number {
    return Math.ceil(this.el.offsetHeight / this.rowHeight)
  }

  getVisibleData(scrollTop: number) {
    console.log(scrollTop)
    let start: number = Math.floor(scrollTop / this.rowHeight)
    let end:number = Math.min(start + this.visibleDataCount() + 5, data.length)
    const _data: Item[] = data.slice(start, end)
    return _data
  }

}

const st = new ST('table')

st.init()