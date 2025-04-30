import React from "react"
import { Typography , Box , Grid , CssBaseline ,Button,CardContent,CardMedia,Card} from "@mui/material"
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";
export default function Home(){
    const categories = [
        {
          title: "Furniture",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
          status : "Coming soon"
        },
        {
          title: "Fashion",
          image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb258ZW58MHwwfDB8fHww",
          status : "Explore"
        },
        {
          title: "Electronics",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
          status : "Explore"
        },
        {
          title: "Wellness",
          image: "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwYXxlbnwwfDB8MHx8fDA%3D",
          status : "Coming soon"
        },
      ];
    return(
        <>
      <Box sx={{
        height:"80vh",
       backgroundImage:`url('https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg')`,
        backgroundSize:"cover",
        objectFit:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        flexDirection:"column",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        px:2,
      }}>

        <Typography variant="h3" color="black">
            Start Fresh with SroreLife
        </Typography>
        <Typography variant="h6" margin={"25px 0"} color="black" >
        Discover beautiful, meaningful products for your life
        </Typography>
        <Button variant="contained" component={Link} to="store">Explore Now</Button>
      </Box>
          <Typography variant="h4" align="center" marginTop="25px"> Featured Categories </Typography>
      <Grid container spacing={2} sx={{margin:"25px" ,justifyContent:{xs:"center"}}}>
            {
                categories.map(items => (
                    <Grid  item xs={12} sm={6} md={6} key={items.title}>
                        <Card sx={{display:"flex",flexDirection:"column", 
                        alignItems:"center",
                        justifyContent:"center",
                        margin:"20px",
                        height:"100%",
                        pr:2,pl:2
                        }}>
                            <CardMedia component="img" image={items.image}
                            sx={{ width: "400px",
                                height: "300px",
                                objectFit: "cover", 
                               }}
                            />
                            <CardContent>
                                <Typography align="center">
                                    {items.title}
                                </Typography>
                                <Button variant="outlined">{items.status}</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
      </Grid>
      <Box sx={{display:"flex", padding:"10px", mb:1 , flexDirection:{xs:"column",md:"row"}}}>
            <CardMedia component="img" image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c2luZXNzfGVufDB8MHwwfHx8MA%3D%3D"
            sx={{width:{xs:"100%",md:"50%"}, height:"auto"}}
            />
            <CardContent>
                <Typography variant="h3">Become a bussiness partner</Typography>
                <Typography variant="h6" marginTop="20px">do you want to be a bussiness partner join now!</Typography>
                <Button variant="contained" sx={{marginTop:"25px"}}>Join Partnership</Button>
            </CardContent>
      </Box>
      </>
    )
}