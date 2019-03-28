import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { createStore } from "redux";
// import {Increment,Decrement} from "./Actions/Action";
// import {connect} from "react-redux";


import TodoAppList from "./Components/TodoApp";

class App extends Component {
  render() {
    return (
      <div className="App">
       <TodoAppList  /> 
      </div>
    );
  }
}



export default (App);
