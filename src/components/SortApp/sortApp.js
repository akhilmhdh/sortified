import React,{Component} from 'react';

import{Algorithm} from '../Algorithm/algorithm'

import "./sortAppStyle.scss"

let frame=0;
class SortApp extends Component{
    constructor(props){
        super(props);
        this.state=({elements:Array(this.props.arrayElements)
            .fill(0).map(el=>Math.floor(Math.random() * 500)),
       logs:[],algo:'',
        sorted:[]})
       this.startAnimation=this.startAnimation.bind(this); 
       this.myRef=React.createRef();
    }
    //this.myRef.current.childNodes[0].style.backgroundColor="green";
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
        this.setState({elements:tempArray},()=>{
            const [log,list]=Algorithm(this.state.algo,[...this.state.elements])
            this.setState({logs:log,sorted:list})
        })
    }
    selectAlgo(el){
        this.setState({algo:el})
        const [log,list]=Algorithm(el,[...this.state.elements])
        this.setState({logs:log,sorted:list})
    }
    animate(frame){
        switch (this.state.logs[frame].operation){
            case 'update':
                this.myRef.current.childNodes[this.state.logs[frame].elements[0]].style.backgroundColor="blue";
                this.myRef.current.childNodes[this.state.logs[frame].elements[1]].style.backgroundColor="blue";
                break;
            case 'swap':
                const shallowCopy=[...this.state.elements];
                [shallowCopy[this.state.logs[frame].elements[1]],shallowCopy[this.state.logs[frame].elements[0]]]=
                [shallowCopy[this.state.logs[frame].elements[0]],shallowCopy[this.state.logs[frame].elements[1]]]
                this.setState({elements:shallowCopy})
                break
            default:
                console.log("ended")             
        }
    }
    startAnimation(){
        this.animation=setInterval(()=>{
            if(frame<this.state.logs.length){
                console.log(this.state.logs[frame])
                this.animate(frame)
                frame++
            }
            else{
                clearTimeout();
                console.log("ended")
            }
        },1)
    }
    render(){
        return(
            <div className="sortAppContainer">
                <div className="sortAppVisual" ref={this.myRef}>
                {this.state.elements.map((el,index)=>{
                    return(
                    <div key={index}
                    style={{height:`${el}px`}}
                    className="bars"/>
                    )
                })}
                </div>
                <div>
                    <div onClick={this.startAnimation}
                    >|></div>
                    <div onClick={()=>{clearInterval(this.animation)}}
                    >||</div>
                    <div>
                        <div>&lt;</div>
                        <div>&gt;</div>
                    </div>
                </div>
            </div>
        )

    }
}
export default SortApp;