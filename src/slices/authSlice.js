import { createSlice } from '@reduxjs/toolkit';

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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addDetails: (state, action) => {
      console.log(action.payload)
      Object.entries(action.payload).map(([key,value])=>{
        console.log(key,value)

        if(value === "Invalid credentials")
        {
          state.logInError = true;
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
