interface item {
  id: number,
  label: string,
  name: string,
  position: string,
}
const getData = (num: number) => {
  const data:item[] = []

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
const data:item[] = getData(1000);
export default data