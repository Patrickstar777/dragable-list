import React, { useState, useEffect } from 'react';
import styles from './index.module.scss'
import ArrayItem from './component/ArrayItem';
import { useRenderType } from '../dragSortList/api/hooks'
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
      throw Error('No list data')
    }
  }, [])

  const content = () => {
    switch (renderType) {
      case 'array':
        {
          return (<ArrayItem options={options} useDragHandle={useDragHandle} renderType={renderType} />);
        }
      case 'object':         {
        return (<ArrayItem options={options} useDragHandle={useDragHandle} renderType={renderType} />);
      }
      case 'renderlist': return <></>; break;
      default: return <div>No list data</div>
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