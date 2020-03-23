import React from 'react';

const SortVisualizer=({elements})=>{
    const max=Math.max(...elements);
    return(
        <React.Fragment>
             {elements.map((el,index)=>{
                    return(
                    <div key={index}
                    style={{height:`${(el/max)*100}%`,
                    marginRight:`${100/elements.length}px`,
                    marginLeft:`${100/elements.length}px`,
                    width:`${300/elements.length}px`,
                    fontSize:`${60/elements.length}px`}}
                    className="bars">
                        {elements.length<12?Math.round((el/max)*100):null}
                    </div>
                    )
                })}
        </React.Fragment>
    )
}

export default SortVisualizer