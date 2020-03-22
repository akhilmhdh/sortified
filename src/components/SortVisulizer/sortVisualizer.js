import React from 'react';

const SortVisualizer=({elements})=>{
    return(
        <React.Fragment>
             {elements.map((el,index)=>{
                    return(
                    <div key={index}
                    style={{height:`${el}px`}}
                    className="bars"/>
                    )
                })}
        </React.Fragment>
    )
}

export default SortVisualizer