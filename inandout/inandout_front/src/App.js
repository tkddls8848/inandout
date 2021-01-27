import React, { Component } from 'react'
import Header from './Header'
import Flip from './Flip'
import { DialogContent, DialogTitle } from '@material-ui/core'
import {ModalProvider} from './Modal/modalContext'

const cardsItems = [
  {
    label : "내용1번",
    modal :(
      <React.Fragment>
          <DialogTitle>Title1</DialogTitle>
          <DialogContent>내용1번의 페이지로 이동(미구현)</DialogContent>
      </React.Fragment>
    )
  },
  {
    label : "내용2번",
    modal :(
      <React.Fragment>
          <DialogTitle>Title2</DialogTitle>
          <DialogContent>내용2번의 페이지로 이동(미구현)</DialogContent>
      </React.Fragment>
    )
  },
]

class App extends Component {

  render(){
    return(      
      <div className="container">
        <div>
          <Header></Header>
        </div>
        <div className="card-group" style={{width:"100%", display:"flex", flexDirection:"row"}}>
          <ModalProvider>
            <Flip items={cardsItems}></Flip>
          </ModalProvider>
        </div>
      </div>
    )
  }
}

export default App