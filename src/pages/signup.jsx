import React from "react"
import { Box, TextField, Button, Stack, Typography, Snackbar, Alert,Card } from "@mui/material";
import { Form , redirect,useActionData,useNavigation} from "react-router-dom";
    export async function signupAction({request}){
        const formData = await request.formData()
        const email = formData.get("email")
        const password = formData.get("password")
        const name = formData.get("name")
        const bio = formData.get("bio")

        if(!email || !password || !name || !bio){
            return{error:"Please fillout the form "}
        }
        const userData = {email , password , name , bio}
        localStorage.setItem("user" , JSON.stringify(userData))

        return redirect("/profile")
    }
 
export default function Signup(){
    const actiondata = useActionData()
    const navigation = useNavigation()
    const [openErrorSnackbar, setOpenErrorSnackbar] = React.useState(false);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
    React.useEffect(() => {
        if (actiondata?.error) {
          setOpenErrorSnackbar(true);
        }
      }, [actiondata]);
    
      React.useEffect(() => {
        if (navigation.state === "submitting") {
            setSubmitted(true)
        }
      }, [navigation.state]);
      React.useEffect(() => {
        if (submitted && navigation.state === "idle") {
          if (actiondata?.error) {
            setOpenErrorSnackbar(true);
          } else {
            setOpenSuccessSnackbar(true);
          }
          setSubmitted(false); 
        }
      }, [navigation.state, actiondata, submitted]);
    
      const handleCloseErrorSnackbar = (event, reason) => {
        if (reason === "clickaway") return;
        setOpenErrorSnackbar(false);
      };
    
      const handleCloseSuccessSnackbar = (event, reason) => {
        if (reason === "clickaway") return;
        setOpenSuccessSnackbar(false);
      };
    return(
       <Box sx={{maxWidth:500 , mx:"auto", mt:5,mb:4}}>
        <Typography variant="h4" align="center" gutterBottom>Signup</Typography>
        {actiondata && <Typography color="error" align="center" variant="h5" sx={{mb:3}}>
            {actiondata.error}
            </Typography>}
            <Card sx={{padding:4}}>
        <Form method="post">
            <Stack spacing={3}>
                <TextField label="Email " name="email" />
                <TextField label="Password " name="password" />
                <TextField label="Name" name="name" />
                <TextField label="Bio" name="bio" rows={3} multiline/>
            <Button variant="contained" type="submit">Signup</Button>
            </Stack>
        </Form>
        </Card>
        <Snackbar
        open={openErrorSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseErrorSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseErrorSnackbar} severity="error" sx={{ width: "100%" }}>
          {actiondata?.error}
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSuccessSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSuccessSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSuccessSnackbar} severity="success" sx={{ width: "100%" }}>
          Signup successful! Welcome!
        </Alert>
      </Snackbar>
       </Box>
    )
}