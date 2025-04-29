import React from "react"
import { Box , Stack, Typography ,Button} from "@mui/material"
export default function ProfilePrivacy(){
    const [user , setUser] = React.useState(null)
    React.useEffect(()=>{
        const storeUser = JSON.parse(localStorage.getItem("user"))
        setUser(storeUser)
    },[])
    if(!user){
        return <Typography variant="h5" align="center">No data user was Found</Typography>
    }
    function handleDelete(){
        localStorage.removeItem("user")
        localStorage.removeItem("profileimage")
    }
    return(
       <Box sx={{ pl:5, mx:"auto",mt:5 }}>
        <Typography></Typography>
        <Stack spacing={3}>
        <Typography variant="body1"><strong>Email:</strong>{user.email}</Typography>
        <Typography variant="body1"><strong>Password:</strong>{user.password}</Typography>
        <Typography variant="body1"><strong>Name:</strong>{user.name}</Typography>
        <Typography variant="body1"><strong>Bio:</strong>{user.bio}</Typography>
        </Stack>
        <Button color="error" variant="contained" sx={{mt:3 , mb:3}} onClick={handleDelete}>Clear user data</Button>
       </Box>
    )
}