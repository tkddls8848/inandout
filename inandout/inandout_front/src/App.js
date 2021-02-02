import React, { Component} from 'react'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import Header from './Header'
import Footer from'./Footer'
import Main from './Main'
import Short from './short'
import buttonComponent from './buttoncomponent'
import buttonComponent1 from './buttoncomponent1'

class App extends Component {  
  render(){
    return(      
      <div className="container">
        <Header></Header>
        <Main></Main>
        <Router>
            <main>
              <Route exact path="/" component={buttonComponent}></Route>
              <Route path="/1" component={buttonComponent1}></Route>
              <Route path="short" component={Short}></Route>
            </main>
        </Router>
        <Footer></Footer>
      </div>
    )
  }
}

export default App