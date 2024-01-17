import { createSlice } from "@reduxjs/toolkit";



const initialState = [
    {id: "1", name:"Delvis Soto"},
    {id: "2", name:"jose Soto"},
    {id: "3", name:"Delvis daniel"}
]

const userSlice = createSlice({
    name:'users', 
    initialState,
    reducer:{}
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer