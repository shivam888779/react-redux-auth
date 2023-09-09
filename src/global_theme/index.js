import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
          main: '#0052cc',
        },
        secondary: {
          main: '#edf2ff',
        },
      },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{

                }
            }
        }
    },
    typography:{
        subtitle1: {
            fontSize: 12,
          },
          body1: {
            fontWeight: 500,
          },
          button: {
            fontStyle: 'italic',
          },
        //   h1:{

        //   }
    }
    
})
export default theme;