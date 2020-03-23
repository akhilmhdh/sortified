import React,{Component} from 'react';
import './App.scss';
import HeaderApp from './components/HeaderApp/headerApp';
import MenuApp from './components/MenuApp/menuApp';
import SortApp from './components/SortApp/sortApp';

class App extends Component{
  constructor(props){
    super(props);
    this.state=({arrayElements:4})
  }
  render(){
    return (
      <div className="App">
        <HeaderApp/>
        <MenuApp
        arrayElements={this.state.arrayElements}
        changeArrayElements={(el)=>{this.setState({arrayElements:el})}}
        generateRandomEl={(el)=>this.refs.sortContainer.genRandomEl(el)}
        selectAlgo={(el)=>{this.refs.sortContainer.selectAlgo(el)}}
        />
        <SortApp
          arrayElements={this.state.arrayElements}
          ref="sortContainer"
        />
      </div>
    );
  }
}

export default App;
