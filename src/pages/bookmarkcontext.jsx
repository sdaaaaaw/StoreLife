import React, { children, createContext } from "react"; 
const BookmarkContext = createContext()
export const useBookmark =()=> React.useContext(BookmarkContext)

export const BookmarkProvider = ({children}) =>{
    const [bookmarkId , setbookmarkId] = React.useState(()=>{
    const stored = localStorage.getItem("bookmarks")
    return stored ? JSON.parse(stored):[]
})
     const mark= (id)=>{
        setbookmarkId(prev => prev.includes(id)? prev.filter(bookmarkid => bookmarkid != id)
        : [...prev, id]
        )
        } 
        React.useEffect(() => {
            localStorage.setItem("bookmarks", JSON.stringify(bookmarkId));
          }, [bookmarkId])
        return(
            <BookmarkContext.Provider value={{bookmarkId , mark}}>
                {children}
            </BookmarkContext.Provider>
        )
}
