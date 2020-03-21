import React,{Component} from 'react'

import "./menuAppStyle.scss"

class MenuApp extends Component{
    constructor(props){
        super(props)
        this.state=({algo:"",sortingAlgos:[
            "Insertion Sort","Bubble Sort","Merge Sort"
        ]})
    }

    render(){
        return(<div className="menuAppContainer">
        <input type="range" 
        min="4" max="100"
        value={this.props.arrayElements} 
        onChange={(el)=>{this.props.changeArrayElements(Number(el.target.value))}}
        />
        <input type="button"
            onClick={(el)=>this.props.generateRandomEl()}
        />
        <div className="dropdown">
            <button>{this.state.algo}</button>
            <div className="dropdown-content">
                <ul>
                   {this.state.sortingAlgos.map((el,index)=>{
                       return(
                       <li onClick={()=>this.setState({algo:el},()=>this.props.selectAlgo(el))}
                        key={index}>
                        {el}
                        </li>)
                   })}
                </ul>
            </div>
        </div>
    </div>)
    }
}

export default MenuApp;