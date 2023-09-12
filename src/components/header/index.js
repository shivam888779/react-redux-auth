import * as React from 'react';
import {AppBar,IconButton,Button,Typography,Toolbar,Box} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import authState from '../../constant/authstate';
import { addDetails } from '../../slices/authSlice';

const Header=()=> {

  const logOutState ={
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

  }
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.auth);
  const handleLogOut = ()=>{
    localStorage.clear();
    dispatch(addDetails({...logOutState}))

  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" onClick={handleLogOut}>Log Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;