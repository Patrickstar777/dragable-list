import React, { useState, useEffect } from 'react';
import styles from './index.module.scss'
// import {handleOnDragStart,handleOnDrag,handleOnDragOver,handleOnDragEnd} from '../../api/dragApi'
import { deepClone } from '../../api'
function ArrayItem(props) {
  const { options = [], useDragHandle = false } = props;
  const [dataList, setDataList] = useState(options);
  const [dragElement, setDragElement] = useState();
  const [overElement, setOverElement] = useState();



  const handleOnDragStart = (e) => {
    e.currentTarget.style.backgroundColor = '#fafafa';
    setDragElement(e.currentTarget);
  }
  const handleOnDrag = (e) => {
    e.preventDefault();
    e.currentTarget.style.opacity = '0';
  }
  const handleOnDragOver = (e) => {
    e.preventDefault();
    const dragIndex = dragElement.dataset.index;
    const overIndex = e.currentTarget.dataset.index;
    let animateName = dragIndex > overIndex ? styles.dragUp : styles.dragDown;
    animateName=dragIndex===overIndex?null:animateName;
    console.log(animateName);
    if (overElement && e.currentTarget.dataset.index !== overElement.dataset.index) {
      overElement.classList.remove(styles.dragUp, styles.dragDown, styles.topDragDown);
    }
    if (!e.currentTarget.classList.contains(animateName)) {
      e.currentTarget.classList.add(animateName);
      setOverElement(e.currentTarget);
    }
  }
  const handleOnDragEnd = (e) => {
    e.preventDefault();
    let _dataList = dataList;
    console.log(e.target.classList);
    overElement.classList.remove(styles.dragUp, styles.dragDown, styles.topDragDown);
    const from = deepClone(_dataList[dragElement.dataset.index]);
    _dataList.splice(dragElement.dataset.index, 1);
    _dataList.splice(overElement.dataset.index, 0, from);
    setDataList([..._dataList])
    e.currentTarget.style.opacity = '1';
    e.currentTarget.style.backgroundColor = ''
  }


  return (
    <>
      <ul className={styles.dragList}
        onDragOver={e => e.preventDefault()}
      >
        {dataList.map((item, index) => (
          <li
            draggable
            onDragStart={handleOnDragStart}
            onDrag={handleOnDrag}
            onDragEnd={handleOnDragEnd}
            onDragOver={handleOnDragOver}
            key={index}
            data-index={index}
            className={styles.dragItem}
          >
            <span>拖拽图标</span>
            <span>
              <span className={styles.forbiddenDrag}
                draggable={false}
                onMouseDown={useDragHandle ? e => e.preventDefault() : null}
              >==================={item}</span>
            </span>
          </li>
        ))}
      </ul>
    </>


  );
}
export default ArrayItem;