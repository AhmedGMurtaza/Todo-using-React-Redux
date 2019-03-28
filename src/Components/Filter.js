import React, { Component } from 'react'
// import store from '../Reducers/index';
import { connect } from "react-redux";

import {DisplayAll,DisplayActive, DisplayCompleted} from "../Actions/Action"

export class Filter extends Component {

  render() {
    // console.log(this.props.todoitems);
    let activetodo = this.props.todoitems.filter(item => !item.isCompleted )
    
    return (
      <div className="container filterdiv">
        {/* {store.getState().todoitems.length} */}
        <span className="count float-left">  { activetodo.length } Item left </span>
         <button className="filterbtn" onClick={this.props.showAll} > All </button>
        <button className="filterbtn" onClick={()=>{this.props.showActive()}} > Active </button>
        <button className="filterbtn" onClick={()=>{this.props.showCompleted()}}  > Completed </button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    todoitems : state.todoitems
  }
}

const mapDispatchToProps = (dispatch) => {
	return{
		showAll: () => dispatch(DisplayAll()),
	  showActive : () => dispatch(DisplayActive()),
	  showCompleted: () => dispatch(DisplayCompleted())
	}
}
const FilterList = connect(mapStateToProps,mapDispatchToProps)(Filter);
export default FilterList

// export default Filter
