import {createSlice} from '@reduxjs/toolkit'


const todoSlice = createSlice({
    initialState:{
       todo:[]
    },
    name:"todoAdd",
    reducers:{
        addDataInTodo:(state,action)=>{
          state.todo=action.payload
        }
    }
})

export const {addDataInTodo} =createSlice.actions
export default createSlice.reducer