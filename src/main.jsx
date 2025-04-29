import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter , 
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import {CssBaseline }from '@mui/material'
import '@fontsource/inter'; 
import Layout from './pages/Layout'
import Home from './pages/Home'
import AboutPage from './pages/About'
import Store , {loader as storeloader} from './pages/Store'
import StoreDetails , {loader as detailloader} from './pages/StoreDetails'
import Bookmark , {loader as bookmarkloader}from './pages/bookmark'
import { BookmarkProvider } from './pages/bookmarkcontext'
import Profile , {profileloader} from './pages/Profile'
import ProfilePrivacy from './pages/ProfilePrivacy'
import ProfileCart from './pages/ProfileCart'
import ProfilePrice from './pages/ProfilePrice'
import Signup ,{ signupAction} from './pages/signup'
const theme = createTheme({
  Typography:{
    fontFamily:"inter"
  },
  body:{
    margin: 0,
    padding: 0,
    boxSizing:"border-box"
  }
})
function App(){
  const route = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<AboutPage/>}/>
    <Route path='signup' element={<Signup/>} action={signupAction}/>
    <Route path="store" element={<Store/>} loader={storeloader}/>
        <Route path="store/:id" element={<StoreDetails/>} loader={detailloader}/>
     <Route path='bookmark' element={<Bookmark/>} loader={bookmarkloader}/>
    <Route path='profile' element={<Profile/>} loader={profileloader}>
        <Route index element={<ProfilePrivacy/>} loader={profileloader}/>
        <Route path='cart' element={<ProfileCart/>} loader={profileloader}/>
        <Route path='price' element={<ProfilePrice/>} loader={profileloader}/>
    </Route>
  </Route>  
  ))
  return(
    <RouterProvider router={route}/>
  )
}

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <BookmarkProvider>
    <App />
    </BookmarkProvider>
  </ThemeProvider>
)
