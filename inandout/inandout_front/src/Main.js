import React from 'react'
import Flip from './Flip'
import {ModalProvider} from './Modal/modalContext'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import { DialogContent, DialogTitle, Button } from '@material-ui/core'

function Main(){
    const cardsItems = [
        {
          label : "내용1번",
          modal :(
            <React.Fragment>
                <DialogTitle>No Modal</DialogTitle>
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
      
      const cardsItems1 = [
        {
          label : "내용3번",
          modal :(
            <React.Fragment>
                <DialogTitle>Modal</DialogTitle>
                <DialogContent>내용3번의 페이지로 이동(미구현)
                <Router>
                  <Link to = '/'>
                    <Button color="inherit">버튼</Button>
                  </Link>
                  <Link to = '/1'>
                    <Button color="inherit">버튼1</Button>
                  </Link>
                </Router>
                </DialogContent>
            </React.Fragment>
          )
        },
        {
          label : "내용4번",
          modal :(
            <React.Fragment>
                <DialogTitle>Modal</DialogTitle>
                <DialogContent>내용4번의 페이지로 이동(미구현)</DialogContent>
            </React.Fragment>
          )
        },
      ]
    return(
    <div className="card-group" style={{width:"100%", display:"flex", flexDirection:"row"}}>
      <ModalProvider>
          <Flip items={cardsItems}></Flip>
          <Flip items={cardsItems1}></Flip>
      </ModalProvider>
    </div>
    
    )
}

export default Main


