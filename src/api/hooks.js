import { useState } from "react";

export const useRenderType = ((renderlist, options) => {
    const [renderType,setRenderType]=useState('')
    if (renderlist) {
        setRenderType('renderlist');
    } else if (options) {
        if (typeof options[0] !== 'object') {
            setRenderType('renderlist');
        } else {
            setRenderType('renderlist');
        }
    } else {
        throw Error('No list data');
    }
    return renderType;
})