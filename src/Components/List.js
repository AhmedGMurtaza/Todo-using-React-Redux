import React, { Component } from 'react'
// import store from "../Reducers/index";
import { connect } from "react-redux";

import checkmate, { DeleteTodo, ToggleTodo ,EditTodo} from "../Actions/Action";
import keyPress from "../Actions/Action";
import removeItem from "../Actions/Action";
import "../style.css";

// import initState from "../Reducers/index";

class List extends Component {

    handleRemove = (index)=>{
        this.props.removeTodo(index);
    }
    handleToggle = (index) => {
        this.props.toggleTodo(index);

    }

    handleKeyPress = (index,e) => {
        this.props.editTodo(index,e.target.value);

    }

    render() {
          return (
            <ul className = "list-group">
                {this.props.todo.todo.map( (item,key) =>        
            <li key = {key} className="list-group-item"> 
          
            <input type="checkbox" className="float-left my-3 strike" onClick={this.handleToggle.bind(this,key)} checked = { item.isCompleted ? true : false }/> 
            
            <input type="text" value={item.caption} className="myinput strike" onChange={this.handleKeyPress.bind(this,key)} style={{textDecoration: item.isCompleted ? "line-through":"none"}} disabled={item.isCompleted ? true : false}/>              
            <button className="btn btn-danger mybtn float-right" onClick ={this.handleRemove.bind(this,key)} > Delete </button>               
            </li>)}
            </ul>
            )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeTodo :(index)=> dispatch(DeleteTodo(index)),
        editTodo :(index,value) => dispatch(EditTodo(index,value)),
        toggleTodo :(index) => dispatch(ToggleTodo(index))
    }
}

const newList = connect(null,mapDispatchToProps)(List);
export default newList;
