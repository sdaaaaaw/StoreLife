import { useStoreCart } from "./cartstore" 
import { Box, Typography, Button, Stack , CardMedia} from '@mui/material'

export default function ProfileCart(){
    const cartItems = useStoreCart((state) => state.cartItems)
    const removeFromCart = useStoreCart((state) => state.removeFromCart)
  
    if (cartItems.length === 0) {
      return <Typography variant="h5" align="center" sx={{mt:5}}>Your cart is empty!</Typography>
    }
    return(
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5,mb:5 }}>
        <Typography variant="h4" gutterBottom>Cart</Typography>
        <Stack spacing={2}>
          {cartItems.map((item) => (
            <Box key={item.id} sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
                <CardMedia image={item.images}/>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body1">{item.price} $</Typography>
              <Typography variant="body1" sx={{mb:2}}>{item.category}</Typography>
              <Button variant="outlined" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </Box>
          ))}
        </Stack>
      </Box>
    )
}