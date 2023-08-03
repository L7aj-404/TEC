import {useState} from 'react'
import { useAuth } from './useAuth'

export const useSignup = () => {
  const [iserror, setIserror] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const {dispatch}=useAuth()

  const signup = async (firstname,lastname,age,email,password) => {
    setIsLoading(true)
    setIserror(null)

    const response = await fetch('http://localhost:8000/api/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
                'Accept': 'application/json'
    },
      body: JSON.stringify({firstname,lastname,age,email,password })
    })
    const json = await response.json()
console.log(json);
    if (!response.ok) {
      setIsLoading(false)
      setIserror(json.message)
    }

    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { signup, isLoading, iserror }



}
