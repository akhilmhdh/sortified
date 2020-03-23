import React,{Component} from 'react';

import{Algorithm} from '../Algorithm/algorithm'

import "./sortAppStyle.scss"
import Controller from '../Controller/controller';
import SortVisualizer from '../SortVisulizer/sortVisualizer';
class SortApp extends Component{
    constructor(props){
        super(props);
        this.state=({
            elements:Array(this.props.arrayElements).fill(0).map(el=>Math.floor(Math.random() * 500)),
            logs:[],
            algo:'',
            sorted:[],
            frameSpeed:1000,
            frame:0})
       this.startAnimation=this.startAnimation.bind(this); 
       this.selectAlgo=this.selectAlgo.bind(this);
       this.genRandomEl=this.genRandomEl.bind(this);
       this.animate=this.animate.bind(this);
       this.myRef=React.createRef();
       this.prevData=[]
    }

    componentDidMount(){
        this.selectAlgo("Merge Sort")
    }

    componentDidUpdate(pastProps,pastState){
        if(this.props.arrayElements>pastProps.arrayElements){
            const tempArray=Array(this.props.arrayElements-pastProps.arrayElements)
            .fill(0).map(el=>Math.floor(Math.random() * 500))
            this.setState({elements:[...this.state.elements,...tempArray]},()=>{
                this.selectAlgo(this.state.algo);
            });
        }
        else if(pastProps.arrayElements!==this.props.arrayElements){
            this.setState({elements:[...this.state.elements.slice(0,this.props.arrayElements)]},()=>{
                this.selectAlgo(this.state.algo);
            })
        }

    }
    genRandomEl(){
        const tempArray=this.state.elements.map(el=>Math.floor(Math.random() * 500))
        this.setState({elements:tempArray},()=>{
            this.selectAlgo(this.state.algo);
        })
    }
    selectAlgo(el){
        if(el!==this.state.algo){this.setState({algo:el})};
        const [log,list]=Algorithm(el,[...this.state.elements])
        this.setState({frame:0})
        this.setState({logs:log,sorted:list})
    }
    animate(){
        try{
            this.prevData.forEach((el,index)=>el!==this.state.logs[this.state.frame].elements[index] && this.prevData.length
            ?this.myRef.current.childNodes[el].style.backgroundColor="#ec5b1d":null);
        }catch(err){}
            try {
                switch (this.state.logs[this.state.frame].operation){
                    case 'update':
                        this.state.logs[this.state.frame].elements.forEach((el)=>this.myRef.current.childNodes[el].style.backgroundColor="#1dbac2");
                        this.prevData=this.state.logs[this.state.frame].elements;
                        break;
                        
                    case 'swap':
                        const shallowCopy=[...this.state.elements];
                        this.state.logs[this.state.frame].elements.forEach((el)=>this.myRef.current.childNodes[el].style.backgroundColor="#1dbac2")
                        new Promise(resolve => setTimeout(resolve, 100));
                        this.state.logs[this.state.frame].elements.forEach((el)=>this.myRef.current.childNodes[el].style.backgroundColor="yellow");
                        [shallowCopy[this.state.logs[this.state.frame].elements[1]],shallowCopy[this.state.logs[this.state.frame].elements[0]]]=
                        [shallowCopy[this.state.logs[this.state.frame].elements[0]],shallowCopy[this.state.logs[this.state.frame].elements[1]]];
                        this.setState({elements:shallowCopy});
                        this.prevData=this.state.logs[this.state.frame].elements;
                        break

                    case 'change':
                        const changeCopy=[...this.state.elements];
                        changeCopy[this.state.logs[this.state.frame].elements[0]]=this.state.logs[this.state.frame].elements[1];
                        this.setState({elements:changeCopy});
                        break

                    case 'sorted':
                        this.prevData=[]
                        this.myRef.current.childNodes.forEach((el,index)=>{
                            el.style.backgroundColor="#B6935C";this.prevData.push(index)});
                        break;

                    default:
                        console.log("ended")             
            }
        }catch(error){}
    }
    startAnimation(){
        this.animation=setInterval(()=>{
            if(this.state.frame<this.state.logs.length){
                //console.log(this.state.logs[this.state.frame])
                this.animate()
                this.setState({frame:this.state.frame+1})
            }
            else{
                clearInterval(this.animation);
            }
        },this.state.frameSpeed)
    }
    goPrevFrame(){
        clearInterval(this.animation);
        if(this.state.fame<0){this.setState({frame:0})}
        else{this.setState({frame:this.state.frame-1})};
        this.animate();
    }
    goNextFrame(){
        clearInterval(this.animation);
        if(this.state.fame>this.state.logs.length){this.setState({frame:this.state.log.length-1})}
        else{this.setState({frame:this.state.frame+1})};
        this.animate();
    }
    render(){
        return(
            <div className="sortAppContainer">
                <div className="sortAppVisual" ref={this.myRef}>
                    <SortVisualizer
                    elements={this.state.elements}/>
                </div>
               <Controller
               startAnimation={()=>{
                   if(this.state.frame!==this.state.logs.length){this.startAnimation()}
                   else{this.selectAlgo(this.state.algo);this.startAnimation()}
                  }}
               stopAnimation={()=>{clearInterval(this.animation)}}
               goPrevFrame={()=>this.goPrevFrame()}
               goNextFrame={()=>this.goNextFrame()}
               setSpeed={(el)=>{
                   this.setState({frameSpeed:el},()=>{clearInterval(this.animation)})}}
               currentFrame={this.state.frame}
               totalFrames={this.state.logs.length}/>
            </div>
        )

    }
}
export default SortApp;