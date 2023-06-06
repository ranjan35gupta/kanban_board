import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "./Reduxslice/todoSlice";
export  const store  = configureStore({
    reducer: {
        newState : todoSlice
    }
})