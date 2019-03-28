import React, { Component } from 'react'
import  { AddTodo } from "../Actions/Action"
// import store from '../Reducers/index';
import { connect } from 'react-redux';


export class Form extends Component {
    handleSubmit=(event) => {
        event.preventDefault();
        var value = this.refs.name.value;
         this.props.addItem(value);
        this.refs.name.value="";
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit} className="user-form" >
        <input type="text" ref="name" className="w-100 user-input" name = "name" placeholder="What needs to be done"></input>
    </form> 
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
     addItem : (e) => dispatch(AddTodo(e))
    }
}

 const FormList = connect(null,mapDispatchToProps)(Form);

 export default FormList;
// export default Form;
