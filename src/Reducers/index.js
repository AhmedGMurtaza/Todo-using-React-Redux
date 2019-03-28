import {  createStore} from "redux";

export const initState = {
    todoitems: [{
        caption: "Java",
        isCompleted: false
    }],
    filter: ""
}

const todoreducer = (state = initState, action) => {
    console.log("Action triggered : " + action.type);
    switch (action.type) {
        case "ADD-TODO":
        state = {
            filter: state.filter,
            todoitems: [...state.todoitems, { caption: action.todo, isCompleted: action.isCompleted  }]
        }
            // state.filter = state.filter;
            //   state.todoitems = [  ...state.todoitems ,  { caption: action.todo, isCompleted: action.isCompleted  } ]
             break;

        case "REMOVE-TODO":
            state = {
                 filter: state.filter,
                 todoitems: state.todoitems.filter((_, i) => i !== action.index)
             }
            // state.todoitems = state.todoitems.filter((_, i) => i !== action.index)
            break;

        case "TOGGLE-TODO":
            state.todoitems[action.index].isCompleted = !state.todoitems[action.index].isCompleted
             state = {
                 filter: state.filter,
                 todoitems: [...state.todoitems]
             }
            break;

        case "EDIT-TODO":
            state.todoitems[action.index].caption = action.newcaption
            state = {
                filter: state.filter,
                todoitems: [...state.todoitems]
            }
            break;

        default:
            break;
    }

    switch (action.filter){
        case "ACTIVE" :
        state.filter = "ACTIVE"
        state = {
            filter: state.filter,
            todoitems: [...state.todoitems]
        }     
        break ;

        case "COMPLETED" :
        state.filter = "COMPLETED"
        state = {
            filter: state.filter,
            todoitems: [...state.todoitems]
        } 
         break ;

        case "ALL":
        state.filter = "All"
        state = {
            filter: state.filter,
            todoitems: [...state.todoitems]
        } 
         break;

        default :
            break;
    }

    return state;
}

const store = createStore(todoreducer);

export default store;