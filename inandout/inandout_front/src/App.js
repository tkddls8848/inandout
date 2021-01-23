import React, { Component } from 'react'
import SimpleCard from './SimpleCard'
import SmallCard from './SmallCard'
import Header from './Header'

class App extends Component {

  render(){
    return(      
      <div className="container">
        <div>
          <Header></Header>
        </div>
          <div className="card-group" style={{width:"85%", display:"flex", flexDirection:"row"}}>
            <SimpleCard></SimpleCard>
            <SimpleCard></SimpleCard>
            <SimpleCard></SimpleCard>
            <SimpleCard></SimpleCard>
          </div>
          <div className="card-group" style={{width:"40%", display:"flex", flexDirection:"row"}}>
            <SmallCard></SmallCard>
            <SmallCard></SmallCard>
          </div>
          <div className="card-group" style={{width:"40%", display:"flex", flexDirection:"row"}}>
            <SmallCard></SmallCard>
            <SmallCard></SmallCard>
          </div>
      </div>
    )
  }
}

export default App