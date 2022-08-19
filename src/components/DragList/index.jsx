import React, { useState, useEffect } from 'react';
import styles from './index.module.scss'
import ArrayItem from '../ArrayItem';
function DragList(props) {
  const { options = [], useDragHandle = false, renderlist, children } = props;
  const [renderType, setRenderType] = useState();

  useEffect(() => {

    if (renderlist) {
      setRenderType('renderlist');
    } else if (options.length) {
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
          return (<ArrayItem options={options} useDragHandle={useDragHandle} renderType={renderType} children={children} />);
        }
      case 'object': {
        return (<ArrayItem options={options} useDragHandle={useDragHandle} renderType={renderType} children={children} />);
      }
      case 'renderlist': return <>{children}</>; break;
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
export default DragList;