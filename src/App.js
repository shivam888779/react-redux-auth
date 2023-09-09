import Navigation from './navigation';
import { ThemeProvider } from '@mui/material';
import theme from './global_theme';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.auth);
  const {isUserValid} = tasks;
  useEffect(()=>{
    if(!isUserValid)
    {
      navigate('/');
    }
    
  },[])
  return (
    <ThemeProvider theme={theme}>
         <Navigation/>
    </ThemeProvider>
  );
}

export default App;
