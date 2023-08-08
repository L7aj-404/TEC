import {useState} from 'react'
import { useAuth } from './useAuth'
import { Back_end_Url } from '../api/URLs'

export const useLogin = () => {
  const [iserror, setIserror] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const {dispatch}=useAuth()

  const login = async (email, password) => {
    setIsLoading(true)
    setIserror(null)



        const response = await fetch(Back_end_Url+'/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
                'Accept': 'application/json'
    },
      body: JSON.stringify({ email, password })
    }).catch(res=>{
        res.message ="email or password not matched";
        setIserror("email or password not matched")
    })
    const json = await response.json()



    console.log(json);
    if (!response.ok) {
      setIsLoading(false)
      setIserror(json.message)

    }

    if (response.ok) {
        if(json.status==401){
            setIsLoading(false)
            setIserror(json.message)
        }else{

            // // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({type: 'LOGIN', payload: json})

            // update loading state
            setIsLoading(false)
        }
    }

  }

  return { login, isLoading, iserror }



}
