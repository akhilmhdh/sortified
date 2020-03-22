import React,{Component} from 'react';

import "./controllerStyle.scss"

class Controller extends Component{
    constructor(props){
        super(props);
        this.state=({frameSpeed:{1000:"1x",100:"2x",10:"3x",1:"4x"},currentFrameSpeed:1000})
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        const temp=this.state.currentFrameSpeed/10;
        temp>=1?this.setState({currentFrameSpeed:temp},()=>{this.props.setSpeed(this.state.currentFrameSpeed)})
        :this.setState({currentFrameSpeed:1000},()=>{this.props.setSpeed(this.state.currentFrameSpeed)})
    }
    render(){
        return(
            <div className="controllerContainer">
                <div className="controllerVisualizer">
                    <div style={{width:`${(this.props.currentFrame/this.props.totalFrames)*100}%`,
                    borderTopRightRadius:`${this.props.currentFrame===this.props.totalFrames?10:0}px`,
                    borderBottomRightRadius:`${this.props.currentFrame===this.props.totalFrames?10:0}px`}}
                    className="played"/>
                    <div className="playLeft"
                        style={{ borderTopLeftRadius:`${this.props.currentFrame===0?10:0}px`,
                        borderBottomLeftRadius:`${this.props.currentFrame===0?10:0}px`}}
                    />
                </div>
                <div onClick={()=>{this.handleClick()}}>{this.state.frameSpeed[this.state.currentFrameSpeed]}</div>
                <div onClick={()=>this.props.startAnimation()}>|></div>
                <div onClick={()=>this.props.stopAnimation()}>||</div>
                <div onClick={()=>this.props.goPrevFrame()}>&lt;</div>
                <div onClick={()=>this.props.goNextFrame()}>&gt;</div>
            </div>
        )
    }
}

export default Controller