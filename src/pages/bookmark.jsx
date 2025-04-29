import React from "react"
import { useLoaderData } from "react-router-dom"
import { useBookmark } from "./bookmarkcontext"
import { getAllProducts } from "../api"
import { Grid , Card , CardContent , CardMedia, Typography } from "@mui/material"
export function loader(){
  return getAllProducts()
}
export default function Bookmark(){
  const product = useLoaderData()
  const {bookmarkId} = useBookmark()

  const bookmarkedItems = product.filter(p=>bookmarkId.includes(p.id))
  return(
    <>
   { bookmarkId.length === 0 ?  (<Typography variant="h3" align="center">there is no Bookmarks yet</Typography>) 
    : 
    (<Grid container spacing={2} sx={{ padding: 2 }}>
    {bookmarkedItems.map(item => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image={item.image}
            alt={item.title}
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body2">Price: ${item.price}</Typography>
            <Typography variant="body2">{item.category}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>) }
  </>
);
}

