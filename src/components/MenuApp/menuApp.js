import React,{Component} from 'react'

import "./menuAppStyle.scss"
class MenuApp extends Component{
    constructor(props){
        super(props)
        this.state=({algo:"Merge Sort",
        sortingAlgos:[
           "Merge Sort","Quick Sort","Heap Sort","Bubble Sort","Insertion Sort"],
        numElement:this.props.arrayElements})
    }
    render(){
        return(
            <div className="menuAppContainer">
                <div>
                    <input type="range" 
                    min="4" max="100"
                    value={this.state.numElement} 
                    onChange={(el)=>{this.setState({numElement:el.target.value})}}
                    onClick={(el)=>{this.props.changeArrayElements(Number(el.target.value))}}
                    onTouchEnd={(el)=>{this.props.changeArrayElements(Number(el.target.value))}}
                    className="slider"/>
                    <output>{this.props.arrayElements}</output>
                </div>
                <div className="randomButton">
                    <input type="button"
                    onClick={(el)=>this.props.generateRandomEl()} value="Random"/>
                </div>
                <div className="dropdown">
                    <select className="dropdown-content" onChange={(el)=>{this.props.selectAlgo(el.target.value)}}>
                        {this.state.sortingAlgos.map((el,index)=>{
                            return(
                            <option key={index}>{el}</option>)
                        })}
                    </select>
                </div>
        </div>)
    }
}

export default MenuApp;

