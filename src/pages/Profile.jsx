import React from "react"
import { Box,Avatar,Typography,Button ,Stack, Snackbar, Alert, colors} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, Outlet ,redirect  } from "react-router-dom";
import { blue, red } from "@mui/material/colors";
import { authLoader } from "../api";
export async function profileloader() {
    return authLoader()
}
export default function Profile(){
    const [selectedimage,setselectedimage] = React.useState(null)
    const [opensnackbar , setopensnackbar] = React.useState(false)
    const [snackbarseverity , setsnackbarseverity] = React.useState("success")
    const [snackbarmessage , setsnackbarmessage] = React.useState("")
    const [storeuser , setstoreuser] = React.useState()
    React.useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"))
        setstoreuser(user)
        console.log(storeuser)
    },[])
    
    React.useEffect(()=>{
        const savedimage = localStorage.getItem('profileimage')
        if(savedimage){
            setselectedimage(savedimage)
        }
    },[])
    function handleimageChange(e){
       const file = e.target.files[0]
       if(file){
        setselectedimage(URL.createObjectURL(file))
        const reader = new FileReader()
        reader.onloadend=()=>{
            const base64string = reader.result
            setselectedimage(base64string)
            localStorage.setItem("profileimage",base64string)
            setsnackbarmessage("Profile Picture Saved")
            setsnackbarseverity("success")
            setopensnackbar(true)
        }
        reader.readAsDataURL(file)
       }
    }
    function handleDelete(){
        setselectedimage(null)
        localStorage.removeItem("profileimage")
        setsnackbarmessage("Profile Picture Deleted")
        setsnackbarseverity("info")
        setopensnackbar(true)
    }
    function handlesnackbarClose(event,reason){
        if(reason==="clickaway") return;
        setopensnackbar(false)
    }
    const styles = {
        color : blue[900],
        borderBottom:"solid blue 2px",
        fontWeight:"bold",
        textDecoration:"none"
    }
    return(
        <>
        <Box>
            <Typography variant="h4" align="center" sx={{mt:3 , mb:3}}>My Profile</Typography>
            <Avatar
            sx={{width:"220px" , height:"220px", margin:"auto"}}
            src={selectedimage || "/default-profile.png"}
            />
            <Typography align="center" sx={{mt:3}} variant="h4"></Typography>
            <Stack sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row", mt:3}}>
            <Button
            variant="contained"
            component="label"
            sx={{ ml:2}}
            >
                Upload Image
                <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleimageChange}
                />
            </Button>
            {selectedimage&&<Button onClick={handleDelete} variant="contained" color="error"
            sx={{ ml:2 }} 
            ><DeleteIcon/></Button>}
            <Snackbar
            open={opensnackbar}
            autoHideDuration={3000}
            onClose={handlesnackbarClose}
            anchorOrigin={{vertical:"top" , horizontal:"center"}}
            >
                <Alert
                onClose={handlesnackbarClose}
                severity={snackbarseverity || "info"}
                >
                    {snackbarmessage || "something happened"}
                </Alert>
            </Snackbar>
            </Stack>
        </Box>
        <Box sx={{mt:4 , display:"flex",justifyContent:"space-evenly"}}>
            <NavLink to='.' end style={({isActive}) => isActive ? styles : {color:blue[500] ,textDecoration:"none"}}
            
            >Privacy</NavLink>
            <NavLink to="cart" style={({isActive}) => isActive ? styles : {color:blue[500] ,textDecoration:"none"}}
            
            >Cart</NavLink>
            <NavLink to="price"style={({isActive}) => isActive ? styles : {color:blue[500] ,textDecoration:"none"}}>Price</NavLink>
        </Box>

        <Outlet/>
        </>
    )
}