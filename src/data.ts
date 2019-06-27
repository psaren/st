interface Item {
  id: number,
  label: string,
  name: string,
  position: string,
}
const getData = (num: number) => {
  const data: Item[] = []

  for(let i = 0;i < num;i++) {
    data.push({
      id: i + 1,
      label: `label - ${i + 1}`,
      name: `name - ${i + 1}`,
      position: `position - ${i + 1}`,
    })
  }
  return data
}
const data: Item[] = getData(100);
export {
  Item, 
  data
}