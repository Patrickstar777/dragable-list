import React, { useState, useEffect } from 'react';
import styles from './index.module.scss'
import { IconHandle } from '@douyinfe/semi-icons';
import { deepClone } from '@api'
function ListItem(props) {
  const { options = [],
    useDragHandle = false,
    listKey,
    listIndex,
    handleDragStart,
    handleDragOver,
    handleOnDrag,
    handleDragEnd,
    children
  } = props;


  return (
    <>
      <li
        draggable
        onDragStart={e => handleDragStart(e)}
        onDrag={e => handleOnDrag(e)}
        onDragEnd={e => handleDragEnd(e)}
        onDragOver={e => handleDragOver(e)}
        key={listKey}
        data-index={listIndex}
        className={styles.dragItem}
      >
        {useDragHandle ? <span><IconHandle /></span> : null}
        <span className={styles.forbiddenDrag}
          draggable={false}
          onMouseDown={useDragHandle ? e => e.preventDefault() : null}
        >{children}</span>
      </li>
    </>


  );
}
export default ListItem;