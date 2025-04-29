import { Card , CardContent , Typography , Button , Box,Stack } from "@mui/material"
import {motion} from "framer-motion"
export default function ProfilePrice(){
    const plans = [
        {
            Name:"Free",
            Price:"$0",
            Features:["Basic support" , "Access to limited Features","Community Access"]
        },
        {
            Name:"Pro",
            Price:"$9/mo",
            Features:["Everything in Free" , "Priority Support", "Unlimited Projects"]
        },
        {
            Name:"Enterprise",
            Price:"Custom",
            Features:["Dedicated Manager","Custom Solutions","24/7 Premium Support"]
        }
    ]
    return(
       <Box sx={{padding:5}}>
        <Stack
         spacing={4}
         direction="column"
         alignItems="center"
         sx={{
           width: "100%",
           maxWidth: "600px", 
           margin: "0 auto",
         }}
        >
        <Typography align="center" variant="h5">Our Pricing Plan</Typography>
            {plans.map( (items , index) => (
                <motion.div
                key={items.Name}
                initial={{opacity:0 , y:50}}
                animate={{opacity:1 , y:0}} 
                transition={{duration:0.5,delay:index*1}}  
                style={{width:"100%"}}
                >
                <Card sx={{
                    width:"100%",
                    borderRadius:3,
                    boxShadow:4,
                    textAlign:"center",
                    transition:"0.3",
                    "&:hover":{
                        boxShadow:8
                    }
                }}>
                    <CardContent>
                        <Typography variant="h5" sx={{mb:2}}>{items.Name}</Typography>
                        <Typography variant="h4" sx={{mb:2}}>{items.Price}</Typography>
                        <Stack spacing={1} sx={{mb:3}}>
                        {items.Features.map((feature , index) =>(
                            <Typography key={index} variant="body1">
                              &#x2022; {feature}
                            </Typography>
                        ))}
                        </Stack>
                        <Button variant="contained">Choose Plan</Button>
                    </CardContent>
                </Card>
                </motion.div>
            ))}
            </Stack>
       </Box>
    )
}