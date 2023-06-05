import { createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "ToDo",
    initialState: {
        title : ""
    },
    reducers: {
        addTitle : (state,action) => {
            state.title = action.payload
        }
    }
});


export const {addTitle} = todoSlice.actions
export default todoSlice.reducer;