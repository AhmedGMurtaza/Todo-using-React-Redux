import React, { Component } from 'react'
// import store from "../Reducers/index";
// import submitFomHandler from "../Actions/Action";
import List from "./List";
// import Form from "./Form";
import Filter from "./Filter";
import FormList from "./Form";

import { connect } from "react-redux";
import "../style.css";

class TodoApp extends Component {    

  render() {

    let todo = this.props.todoitems;
    let filter = this.props.filter;
    let filteredState = { todo , filter }
    if(filter ===  "ALL"){
        filteredState.todo = todo
    }
    else if(filter === "ACTIVE"){
        filteredState.todo = todo.filter(item => !item.isCompleted )
        console.log(filteredState);
    }
    else if(filter === "COMPLETED"){
        filteredState.todo = todo.filter(item => item.isCompleted )
    }
    console.log("props : " + this.props.todo);
  
    return (
      <div className="conatiner h-50">
        <h1 id="main-heading">todos</h1>
       <div className="container w-50">
            {/* <Form/> */}
            <FormList/>
            <List todo={filteredState} />
       </div>  
       <div  className="container w-50 h-50" >  
        <Filter/>      
        </div> 
      </div>
    )
  }
}


const mapStateToProps = (state) => {
 return {  
   todoitems : state.todoitems,
   filter : state.filter
 }
}

const TodoAppList = connect(mapStateToProps,null)(TodoApp);

export default TodoAppList;