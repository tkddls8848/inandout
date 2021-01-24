import React, { Component } from 'react'
import SimpleCard from './SimpleCard'
import SmallCard from './SmallCard'
import Header from './Header'
import Flip from './Flip'

class App extends Component {
  render(){
    return(      
      <div className="container">
        <div>
          <Header></Header>
        </div>
        <div className="card-group" style={{width:"100%", display:"flex", flexDirection:"row"}}>
            <Flip></Flip>
            <Flip></Flip>
            <Flip></Flip>
          </div>
          <div className="card-group" style={{width:"100%", display:"flex", flexDirection:"row"}}>
            <Flip></Flip>
            <Flip></Flip>
            <Flip></Flip>
          </div>
      </div>
    )
  }
}

export default App