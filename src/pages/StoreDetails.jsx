import React from "react";
import { Link, useLoaderData , useLocation } from "react-router-dom";
import { Card , Typography , Button , CardContent,CardMedia ,Box,Grid} from "@mui/material";
import {   getProduct } from "../api";
import WestIcon from '@mui/icons-material/West';
import { useStoreCart } from "./cartstore";
export function loader({params}){
     return getProduct(params.id)
}

export default function StoreDetails(){
    const addtoCart = useStoreCart((state)=> state.addtoCart)
    const product = useLoaderData()
    const location = useLocation()
    const search = location.state?.search || ""
    console.log(product)
    return(
        <>
          <Box sx={{ padding: 3 }}>
              <Button
              component={Link}
              to={`..${search}`}
              relative="path"
              variant="contained" 
              size="large"
               sx={{ mt: 2}} 
              startIcon={<WestIcon/>}>
                Back
              </Button>
      <Card sx={{ padding: 2 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={5}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              sx={{ width: "100%", height: "auto", objectFit: "contain", maxHeight: 400 }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {product.title}
              </Typography>

              <Typography variant="h5" color="primary" gutterBottom>
                ${product.price}
              </Typography>

              <Typography variant="body1" paragraph>
                {product.description}
              </Typography>

              <Typography variant="body2" color="text.secondary" gutterBottom>
                Category: {product.category}
              </Typography>

              <Button variant="contained" size="large" sx={{ mt: 2 }} onClick={()=>addtoCart(product)}>
                ADD TO CART
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
        </>
    )
}