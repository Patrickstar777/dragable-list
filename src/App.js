import './App.css';
import React from 'react';
import DragList from '@components/DragList';
import DragListContainer from '@components/DragListContainer';
import {deepClone} from '@api'

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
      <DragList options={obj} useDragHandle ></DragList>
      <div>sss</div>
      {/* <DragListContainer options={obj} useDragHandle ></DragListContainer> */}
    </>
  )
}

export default App;
