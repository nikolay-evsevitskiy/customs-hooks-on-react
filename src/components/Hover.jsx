import React, {useRef} from 'react';
import useHover from "../hooks/useHover";

const Hover = () => {
    const ref = useRef()
    const isHovering = useHover(ref)
    return (
        <>
            <div ref={ref} style={{width: '200px', height: '200px', backgroundColor: isHovering ? 'blue' : 'red'}}/>
        </>
    )
        ;
};

export default Hover;
