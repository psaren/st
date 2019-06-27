import { sayHello } from './greet';
import data from './data'

const renderTable = () => {
  const tb = document.getElementById('table');
  let html:string = ''
  data.forEach(item => {
    html += `<div class="tb-row">
      <span class="tb-row-item">${item.id}</span>
      <span class="tb-row-item">${item.name}</span>
      <span class="tb-row-item">${item.label}</span>
      <span class="tb-row-item">${item.position}</span>
    </div>`
  })
  tb.innerHTML = html
}
renderTable()