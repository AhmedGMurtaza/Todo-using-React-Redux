import store from "../Reducers/index";

export const AddTodo  =  (todo) =>{
    return {type : "ADD-TODO", todo ,isCompleted : false }
}
export const DeleteTodo = (index) => { 
    console.log("HERE ");
    return { type : "REMOVE-TODO", index:index }
}

export const ToggleTodo = (index) =>{
    console.log("Toggling ");
    return { type: "TOGGLE-TODO", index:index}
    
}

export const EditTodo = (index,newcaption) => {
    console.log(" Editing " + index + " cpaiton = " + newcaption);
   
    return { type: "EDIT-TODO" , index:index , newcaption:newcaption}
}

export const DisplayActive = () => {
    console.log("Display Active (Unchecked) ");
    return { type : "" , filter : "ACTIVE"}
}
export const DisplayCompleted = () => {
    console.log("Display Completed");
    return { type : "" , filter : "COMPLETED"}
}

export const DisplayAll = () => {
    console.log("Display all");
    return { type : "" , filter : "ALL"}
}

export default EditTodo;