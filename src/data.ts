import mockData from './mockData'
interface Item {
  id: number,
  label: string,
  name: string,
  email: string,
  address: string,
}

const data: Item[] = mockData.list

export {
  Item, 
  data
}
