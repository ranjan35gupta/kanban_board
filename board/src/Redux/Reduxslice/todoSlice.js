import { createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "ToDo",
    initialState: {
        title : "",
        todo:[],
        beforeCartTitle:"",
        
    },
    reducers: {
        addTitle : (state,action) => {
            const {element,cartId}=action.payload
            // state.title = element
          const  id = cartId
           state.todo.map(ele=>{
                if(ele.id===id){
                 
                  ele.cartName=element
                  
                  localStorage.setItem("todolists",JSON.stringify(state.todo))
                }
              })
        },
        addTodo:(state,action)=>{
        
        console.log( typeof (action.payload),"this is cart")
        state.todo = action.payload
    
    },
    addBeforeCartTitle:(state,action)=>{
     state.beforeCartTitle=action.payload
    },
    addCartItems:(state,action)=>{
      const {cartItemId,lists} =action.payload
      const id = cartItemId
      state.todo.map(ele=>{
        if(ele.id===id){
            ele.cartItems.push(lists)
            localStorage.setItem("todolists",JSON.stringify(state.todo))
        }
      })

    }
    }
});


export const {addTitle,addTodo,addBeforeCartTitle,addCartItems} = todoSlice.actions
export default todoSlice.reducer;