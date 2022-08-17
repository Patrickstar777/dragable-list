import './App.css';
import DragSortList from './component/dragSortList';

function App() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const content=()=>(
    <div>www</div>
  )
  return (
    <>
      <DragSortList options={list} useDragHandle/>
    </>
  )
}

export default App;
