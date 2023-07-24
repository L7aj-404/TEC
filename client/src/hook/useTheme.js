import { useContext } from "react"
import {darkContext} from "../context/darkContext"

export const useTheme = () => {
const context =useContext(darkContext)
 if(!context){
   throw Error("error in auth context")
 }

 return context
}
