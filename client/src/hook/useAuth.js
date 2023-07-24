import { useContext } from "react"
import {AuthContext} from "../context/authContext"

export const useAuth = () => {
const context =useContext(AuthContext)
 if(!context){
   throw Error("error in auth context")
 }

 return context
}
