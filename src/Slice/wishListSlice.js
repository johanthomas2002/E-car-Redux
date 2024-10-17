import { createSlice } from "@reduxjs/toolkit";


const wishListSlice = createSlice({
    name:"wishlist",
    initialState:{
        wishList:[]
    },
    reducers:{
        addToWishList:((state,action)=>{
            state.wishList.push(action.payload);
        }),
        removeFromWishList:((state,action)=>{
            state.wishList = state.wishList.filter(item=>item.id!=action.payload)
        })
    }
})


export const {addToWishList,removeFromWishList} = wishListSlice.actions

export default wishListSlice.reducer