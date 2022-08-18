import './App.css';
import DragSortList from './component/dragSortList';

function App() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const obj = [];
  for (let i = 0; i < 10; i++) {
    obj.push({ label: `对象${i}`, value: i })
  }
  const content = () => (
    <div>www</div>
  )
  return (
    <>
      <DragSortList options={obj} useDragHandle />
    </>
  )
}

export default App;
