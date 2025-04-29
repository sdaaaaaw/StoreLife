import React from "react";
import { Box , Typography , Switch ,Drawer , IconButton , FormControlLabel,FormGroup,
ThemeProvider , createTheme,
CssBaseline,Divider,
Button} from "@mui/material"
import { color, styled, width } from '@mui/system';
import { red, yellow , grey, blue} from "@mui/material/colors"
import { NavLink , useLocation} from "react-router-dom"
import MenuRoundedIcon from '@mui/icons-material/Menu';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import { useStoreCart } from "./cartstore";
import { useNavigate } from "react-router-dom";
const IconSwitch = styled(Switch)(({ theme }) => ({
    width: 82,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(42px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? "gray" : yellow[800],
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ?  "gray":yellow[800] ,
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    
        backgroundColor: theme.palette.mode === 'dark' ?  "gray" : yellow[800] ,
       opacity : 1
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      borderRadius: 20 / 2,
      backgroundColor:theme.palette.mode === 'dark' ? "gray" : yellow[800] ,
    
    },
  }));
export default function Header(){
  const loaction = useLocation()
    const [openDrawer , setopenDrawer] = React.useState(false)
    const clearCart = useStoreCart((state) => state.clearCart);
    const navigate = useNavigate();
    const [darkmode , setdarkmode] = React.useState(()=>{
        const saved =localStorage.getItem("dark")
        return saved ==="true"
})
    const navLinks = [
        {text:'store' , path:"store", icon:<LocalGroceryStoreIcon/>},
        {text:'profile' , path:"profile",icon:<AccountCircleIcon/>},
        {text:'bookmarks' , path:"bookmark",icon:<BookmarksIcon/>},
        {text:'about' , path:"about",icon:<InfoIcon/>},
    ]

    const linkel = navLinks.map(links =>
        <Box 
        sx={{display:"flex", alignItems:"center",}} 
        key={links.text}>
          <Button startIcon={links.icon} fullWidth sx={{
               color : darkmode ? "white" : "#141414",
               fontSize:15,
               "&.active": {
                backgroundColor: "primary.main",
                color: "white",
              },
          }}
          component={NavLink}
          to={links.path}
          className={({isActive}) => isActive ? "active" : ""}
          >
            {links.text}
          </Button>
        </Box>
    )
    React.useEffect(()=>{
      localStorage.setItem("dark",darkmode)
    },[darkmode])
    const theme =
        createTheme({
        palette:{
          mode: darkmode ? 'dark' : 'light'
        }
    })
    function handleSignOut() {
      localStorage.removeItem("user");
      
      clearCart();
      navigate("/signup");
    }
    return(
      <>
        <Box sx={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          padding:"1rem 1.2rem",
          marginTop:"auto",
          backgroundColor:darkmode ? grey[800]: red[500]
        }}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
            <Box >
                <IconButton onClick={()=>{setopenDrawer(true)}} >
                     <MenuRoundedIcon sx={{fontSize:45 , color:"white"}}/>
                </IconButton>
            </Box>
                <Box sx={{ fontSize:"1.5rem",   }}>
                    <NavLink to="/" style={{textDecoration:"none" , color:"white", fontWeight:"500"}}>
                    Store Life</NavLink>
            </Box>
            <Box>
                <FormGroup>
                    <FormControlLabel control={
                      <IconSwitch
                        onChange={()=>{setdarkmode(prev => !prev)}}
                        checked={darkmode}
                        />
                    }/>
                </FormGroup>
            </Box>
            <Drawer anchor="left" open={openDrawer} onClose={()=>{setopenDrawer(false)}}>
                <Box  sx={{
            width: 200,
            padding: "1rem  0px",
            display: "flex",
            justifyContent:"end",
            flexDirection: "column",
            gap: "1rem",
            fontSize:"1.2rem"
          }}>
            <Typography borderBottom={"solid"} marginBottom={"7px"} align="center">Menu</Typography>
            {linkel}
            <Divider/>
            <Button color="error" onClick={handleSignOut}>Signout</Button>
            </Box>
            </Drawer>
            </ThemeProvider>
                </Box>
        </>
    )
}