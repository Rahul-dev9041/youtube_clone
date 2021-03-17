import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Recommend from './Components/Recommend/Recommend';
import Sidebar from './Components/Sidebar/Sidebar';
import Data from './Components/Recommend/Data'

function Cards(val) {
return (
  <Recommend 
      imgsrc={val.imgsrc}
      name={val.name}
      views={val.views}
      /> 
)
}

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
      <Header/>
       <Sidebar/>
       {Data.map(Cards)}
      </div>
    </div>
    )
  }
}
