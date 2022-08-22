import './App.css';
import React from 'react';
import DragList from '@components/DragList';
import DragListContainer from '@components/DragListContainer';
import ListItem from '@components/ListItem';
import { deepClone } from '@api'

function App() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const obj = [];
  for (let i = 0; i < 10; i++) {
    obj.push({ label: `对象${i}`, value: i })
  }
  const handleData=({dragIndex,overIndex})=>{

  }
  return (
    <>
      <div>
        <div>传入数据即可使用的拖拽列表</div>
        <DragList options={obj} useDragHandle ></DragList>
      </div>

      <div>
        <div>还没开发完的自定义列表项</div>
        <DragListContainer useDragHandle handleData={handleData}>
            <div key={1}>sss</div> 
            <div key={2}>ssss</div>
        </DragListContainer>
      </div>

    </>
  )
}

export default App;
