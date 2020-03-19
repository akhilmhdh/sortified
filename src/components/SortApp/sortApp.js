import React,{Component} from 'react';

import "./sortAppStyle.scss"

class SortApp extends Component{
    constructor(props){
        super(props);
        this.state=({elements:Array(this.props.arrayElements)
            .fill(0).map(el=>Math.floor(Math.random() * 500)),
        flag:[],logs:[]})
    }
    componentDidUpdate(pastProps,pastState){
        if(this.props.arrayElements>pastProps.arrayElements){
            const tempArray=Array(this.props.arrayElements-pastProps.arrayElements)
            .fill(0).map(el=>Math.floor(Math.random() * 500))
            this.setState({elements:[...this.state.elements,...tempArray]})
        }
        else if(pastProps.arrayElements!==this.props.arrayElements){
            this.setState({elements:this.state.elements.slice(0,this.props.arrayElements)})
        }
    }
    genRandomEl(){
        const tempArray=this.state.elements.map(el=>Math.floor(Math.random() * 500))
        this.setState({elements:tempArray})
    }
    render(){
        if(this.state.elements===undefined)return <div>Loading..</div>
        return(
            <div className="sortAppContainer">
                {this.state.elements.map((el,index)=>{
                    return(
                    <div key={index}
                    style={{height:`${el}px`}}
                    className="bars"/>
                    )
                })}
            </div>
        )

    }
}

export default SortApp;