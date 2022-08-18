import React, { useState, useEffect } from 'react';
import styles from './index.module.scss'
import ArrayItem from './component/ArrayItem';
function DragSortList(props) {
  const { options = [], useDragHandle = false, renderlist } = props;
  const [renderType, setRenderType] = useState();

  useEffect(() => {
    if (renderlist) {
      setRenderType('renderlist');
    } else if (options) {
      if (typeof options[0] !== 'object') {
        setRenderType('array');
      } else {
        setRenderType('object');
      }
    } else {
      throw Error('无输入数据')
    }
  }, [])

  const content=()=>{
    switch (renderType) {
      case 'array':
        {
          return (<ArrayItem options={options} useDragHandle/>);
        }
      case 'object': return <></>; break;
      case 'renderlist': return <></>; break;
      default: return <div>无数据</div>
    }
  }
  return (
    <>
      <div className={styles.dragContent}>
      {content()}
      </div>

    </>


  );
}
export default DragSortList