import * as React from "react";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  Alert,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addDetails } from "../../slices/authSlice";
import { useState } from "react";
import { useEffect } from "react";

export default function SignInSide() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.auth);

  const [isUserNameValid, setisUserNameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setisUserNameValid(true);
    setIsPasswordValid(true);
    if (tasks.username === "") {
      setisUserNameValid(false);
    }
    if (tasks.password.length < 5) {
      setIsPasswordValid(false);
    }
    if (!(tasks.username === " " || tasks.password.length < 5)) {
      
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: tasks.username,
          password: tasks.password,
        }),
      })
        .then((res) => res.json())
        .then((data) => dispatch(addDetails({ ...data })));

    }
  };

useEffect(()=>{
  if(tasks.remember)
  {
     localStorage.setItem('token',localStorage.getItem('token')?localStorage.getItem('token'):tasks.token)
  }
},[handleSubmit])

  const handleOnchange = (e) => {
    console.log(e.target.checked)
  
    e.target.name === "username"
      ? setisUserNameValid(true)
      : setIsPasswordValid(true);
    dispatch(addDetails({ [e.target.name]: e.target.value }));
    if(e.target.name ==="remember")
    {
      dispatch(addDetails({ [e.target.name]: e.target.checked }));

    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              onChange={handleOnchange}
              fullWidth
              error={!isUserNameValid}
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              helperText={!isUserNameValid ? "please enter a valid usename" : ""}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleOnchange}
              error={!isPasswordValid}
              name="password"
              label="Password"
              helperText={
                !isPasswordValid ? "please enter a valid password" : ""
              }
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" name="remember" color="primary" onChange={handleOnchange}/>}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              disabled = {(localStorage.getItem('token') || tasks.token)}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {tasks.logInError && <Alert severity="error">Unable to LogIn Please Check UserName and Password</Alert>}
            {(localStorage.getItem('token') || tasks.token) && <Alert severity="success">you have successfully logged in</Alert>}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
