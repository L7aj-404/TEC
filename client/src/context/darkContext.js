import { createContext, useState } from "react";

export const darkContext=createContext()



export const DarkContextProfider=({children})=>{

const [theme,setTheme]=useState("dark")

const toggelTheme=()=>{
    setTheme((cur)=>(cur =="dark" ? "light":"dark"))
}

    return (
        <darkContext.Provider value={{theme,toggelTheme}}>
            {children}
        </darkContext.Provider>
    )
}