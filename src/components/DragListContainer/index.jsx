import React, { useState, useEffect } from 'react';
import styles from './index.module.scss'
import { IconHandle } from '@douyinfe/semi-icons';
import ListItem from '../ListItem';
import { deepClone } from '@api'
function DragListContainer(props) {
  const { options = [], useDragHandle = false,children ,key,handleData} = props;
  const [dataList, setDataList] = useState(options);
  const [dragElement, setDragElement] = useState();
  const [overElement, setOverElement] = useState();

  const handleDragStart = (e) => {
    console.log('e', e.currentTarget);
    e.currentTarget.style.backgroundColor = '#fafafa';
    setDragElement(e.currentTarget);
  }
  const handleOnDrag = (e) => {
    e.preventDefault();
    e.currentTarget.style.opacity = '0';
  }
  const handleDragOver = (e) => {
    e.preventDefault();
    const dragIndex = dragElement.dataset.index;
    const overIndex = e.currentTarget.dataset.index;
    let animateName = dragIndex > overIndex ? styles.dragUp : styles.dragDown;
    animateName = dragIndex === overIndex ? null : animateName;
    if (overElement && e.currentTarget.dataset.index !== overElement.dataset.index) {
      overElement.classList.remove(styles.dragUp, styles.dragDown, styles.topDragDown);
    }
    if (!e.currentTarget.classList.contains(animateName)) {
      e.currentTarget.classList.add(animateName);
    }
    setOverElement(e.currentTarget);
  }
  const handleDragEnd = (e) => {
    e.preventDefault();
    let _dataList = dataList;
    overElement.classList.remove(styles.dragUp, styles.dragDown, styles.topDragDown);
    const from = deepClone(_dataList[dragElement.dataset.index]);
    _dataList.splice(dragElement.dataset.index, 1);
    _dataList.splice(overElement.dataset.index, 0, from);
    setDataList([..._dataList])
    e.currentTarget.style.opacity = '1';
    e.currentTarget.style.backgroundColor = ''
  }

  useEffect(()=>{
    console.log(children);
  },[])



  return (
    <>
      <ul className={styles.dragList}
        onDragOver={e => e.preventDefault()}
      >
        {children.map((item, index) => (
          <ListItem
            useDragHandle={useDragHandle}
            key={key?key:index}
            listIndex={index}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDragEnd={handleDragEnd}
            handleOnDrag={handleOnDrag}
          >{item.props.children}</ ListItem>
        ))}
             
      </ul>

    </>


  );
}
export default DragListContainer;