import React, { useState, useEffect } from 'react';
import styles from './index.module.scss'
import { IconHandle } from '@douyinfe/semi-icons';
import { deepClone } from '../../api'
function ArrayItem(props) {
  const { options = [], useDragHandle = false, renderType = '' } = props;
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
    animateName = dragIndex === overIndex ? null : animateName;
    if (overElement && e.currentTarget.dataset.index !== overElement.dataset.index) {
      overElement.classList.remove(styles.dragUp, styles.dragDown, styles.topDragDown);
    }
    if (!e.currentTarget.classList.contains(animateName)) {
      e.currentTarget.classList.add(animateName);
    }
    setOverElement(e.currentTarget);
  }
  const handleOnDragEnd = (e) => {
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
            key={renderType === 'array' ? index : item.value}
            data-index={index}
            className={styles.dragItem}
          >
            {useDragHandle ? <span><IconHandle /></span> : null}
            <span>
              <span className={styles.forbiddenDrag}
                draggable={false}
                onMouseDown={useDragHandle ? e => e.preventDefault() : null}
              >{renderType==='array'? item:item.label}</span>
            </span>
          </li>
        ))}
      </ul>
    </>


  );
}
export default ArrayItem;