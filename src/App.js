import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {

 constructor(){
  super();
  this.state={
    mode:'light',
    btn:"Enable Dark Mode"
  }
 }
  toggle=()=>{
  if(this.state.mode==='dark')
  {
     this.setState({mode:'light',btn:"Enable Dark Mode"})
     document.body.style.backgroundColor='white'
  }
  else
  {
    this.setState({mode:'dark',btn:"Disable Dark Mode"})
    document.body.style.backgroundColor='grey'
  }
 }
  render() {
    return (
      <div>
        <Router>
        <Navbar mode={this.state.mode} btn={this.state.btn} toggle={this.toggle}/>
        <Routes>
        <Route path="/" element={<News mode={this.state.mode} pageSize={9} country="in" apiKey={"bb2e45e0a3374725bfa90ba15f5ee4a0"} category={'sports'}/>}>
        </Route>
        <Route path="/sports" element={<News mode={this.state.mode} pageSize={9} country="in" apiKey={"bb2e45e0a3374725bfa90ba15f5ee4a0"} category={'sports'}/>}>
        </Route>
        <Route path="/health" element={<News mode={this.state.mode} pageSize={9} country="in" apiKey={"bb2e45e0a3374725bfa90ba15f5ee4a0"} category={'health'}/>}>
        </Route>
        <Route path="/science" element={<News mode={this.state.mode} pageSize={9} country="in" apiKey={"bb2e45e0a3374725bfa90ba15f5ee4a0"} category={'science'}/>}>
        </Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
