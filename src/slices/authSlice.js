import { createSlice } from '@reduxjs/toolkit';
import authState from '../constant/authstate';

const initialState = {
  "name" :"",
  "isLoggedIn": false,
  "phoneNo":"74858",
  "email":"",
  "password":"",
    "id": 15,
    "username": "",
    "email": "",
    "firstName": "",
    "lastName": "",
    "gender": "",
    "image": "",
    "token": "",
    "logInError":false,
    "remember": false
 
};

console.log(authState,initialState)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addDetails: (state, action) => {
      console.log(action.payload)
      Object.entries(action.payload).map(([key,value])=>{
        if(value === "Invalid credentials")
        {
          state.logInError = true;
          state.isLoggedIn = true; 
        }
        else{
        state[key] =  value;
        state.logInError = false;
        
        }

      })

    },
    removeTask: (state, action) => {
      state.id = action.payload.id;
     },
  },
});

export const { addDetails,removeTask } = authSlice.actions;
export default authSlice.reducer;
