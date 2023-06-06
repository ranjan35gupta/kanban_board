import { createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "ToDo",
    initialState: {
        title : "",
        todo:[],
    },
    reducers: {
        addTitle : (state,action) => {
            state.title = action.payload
        },
        addTodo:(state,action)=>{
        const todoContainer = [...state.todo]
        console.log(action.payload)
        todoContainer.push(action.payload)
        state.todo = todoContainer
    
    }
    }
});


export const {addTitle,addTodo} = todoSlice.actions
export default todoSlice.reducer;