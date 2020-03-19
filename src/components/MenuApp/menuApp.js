import React from 'react'

import "./menuAppStyle.scss"

const MenuApp =(props)=>{
    return(<div className="menuAppContainer">
        <input type="range" 
        min="4" max="30"
        value={props.arrayElements} 
        onChange={(el)=>{props.changeArrayElements(Number(el.target.value))}}
        />
        <input type="button"
            onClick={(el)=>props.generateRandomEl()}
        />
    </div>)
}

export default MenuApp;