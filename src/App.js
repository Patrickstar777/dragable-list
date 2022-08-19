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
    <div>
      <div>传入数据即可使用的拖拽列表</div>
    <DragList options={obj} useDragHandle ></DragList>
    </div>

<div>
  <div>还没开发完的自定义列表项</div>
<DragListContainer options={obj} useDragHandle ></DragListContainer>
</div>

    </>
  )
}

export default App;
