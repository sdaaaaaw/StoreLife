import React from "react";
import { Box , Card , CardMedia , CardContent, Typography , Grid ,Button,
    FormControl , InputLabel , Select , MenuItem,Pagination,Stack
} from "@mui/material";
import { useLoaderData , Link,useSearchParams } from "react-router-dom";
import{ getAllProducts} from "../api"
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useBookmark } from "./bookmarkcontext";
import { blue, red } from "@mui/material/colors";
export async function loader(){
    return await getAllProducts()
}
export default function Store(){
    const itemsPerPage = 8
    const data = useLoaderData()
    const [currentpage , setcurrentpage] = React.useState(1)
    const [value , setvalue] = React.useState("")
    const { bookmarkId,mark } = useBookmark()
    const [search , setsearch] = useSearchParams()
    const type = search.get("type")
    const typeFilter = type? data.filter(products => products.category  === type):data 

    function togglesearch(key , value){
        setsearch( prev => {
            if(value === null){
                prev.delete(key)
            }else{
                prev.set(key , value)
            }
            return prev
        })
    }

    const totalpage = Math.ceil(typeFilter.length / itemsPerPage)
    const indexOfLastpage = currentpage * itemsPerPage
    const indexOfFirstpage = indexOfLastpage - itemsPerPage
    const currentItem = typeFilter.slice(indexOfFirstpage , indexOfLastpage)

    function handlePageChange(_,value){
        setcurrentpage(value)
    }


    const element = currentItem.map((items , index) =>(
        <Grid container spacing={2} key={`products-${items.id}-${index}`}>
            <Card   sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding:1
              }}>
            <CardMedia component="img" image={items.image} sx={{
                width:"100%",
                height:200,
                objectFit:"contain",
            
            }}/>
            <CardContent sx={{width:"100%"}}>
                <Typography  variant="p" >{items.title}</Typography>
                <Typography margin={"10px 0px"} variant="h5">Price:${items.price}</Typography>
                <Typography margin={"10px 0px"} >{ typeof  items.category === "object" ? 
                items.category.name : items.category}</Typography>
                <Button variant="contained" component={Link} to={`${items.id}`} 
                state={{search:`?${search.toString()}`, types : typeFilter }}>See detail</Button>
                <Button sx={{ marginLeft:"12px"}} onClick={()=>mark(items.id)}>
                   {bookmarkId.includes(items.id) ? <BookmarkIcon/> : <BookmarkBorderOutlinedIcon/>}
                </Button>
            </CardContent>
            </Card>
        </Grid>
    ))
    return(
        <>
        <Card sx={{minWidth:200 , margin:"10px 5px"}}>
            <FormControl fullWidth>
                <InputLabel>Filter</InputLabel>
                <Select  
                    value={value}
                    label="filter"
                    onChange={(e)=> setvalue(e.target.value)}>
                    <MenuItem
                     value="men's clothing"
                     onClick={()=>togglesearch("type" , "men's clothing")}
                    >men's clothing</MenuItem>
                    <MenuItem
                     value="women's clothing"
                     onClick={()=>togglesearch("type" ,"women's clothing")}
                    >women's clothing</MenuItem>
                    <MenuItem
                     value="Electronics"
                     onClick={()=>togglesearch("type" , "electronics")}
                    >Electronics</MenuItem>
                    <MenuItem
                    value="jewelery"
                    onClick={()=>togglesearch("type","jewelery")}
                    >Jewelery</MenuItem>
                </Select>
            </FormControl>
        </Card>
          { type &&  <Button  color="secondary" variant="contained" startIcon={<FilterListIcon/>}
            sx={{margin:"15px"}} onClick={()=>{
                setsearch({}) 
                setvalue("")}}
            >Clear All Filters</Button>}
        <Box sx={{display:"grid",gridTemplateColumns:"repeat(4)", padding:2}}>
            <Grid container spacing={2}>
        {element}
            </Grid>
            <Stack spacing={5} sx={{marginTop:5,padding:2,display:"flex",
                justifyContent:"center",alignItems:"center" }}>
                <Pagination variant="outlined" shape="rounded" 
                size="large"
                color="primary"
                count={totalpage}
                page={currentpage}
                onChange={handlePageChange}
                sx={{
                    '& .MuiPaginationItem-root': {
                        color: 'white',           // text color
                        borderColor: 'primary.main',     // border color
                        backgroundColor: blue[500], 
                      },
                    '& .Mui-selected': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                        borderColor: 'primary.main',
                      },
                      '& .MuiPaginationItem-root:hover': {
                        backgroundColor: 'primary.light',
                      }
                }}
                />
            </Stack>
        </Box>
        </>
    )
}