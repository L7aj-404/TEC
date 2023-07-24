import { useEffect } from "react"
import { Card, Crad } from "./Card"
import  {AbouteContainer,Info,PuLL,Title,Pargraphe,ContainerCard} from "./style"
import { useTheme } from "../../hook/useTheme"

export default function About() {

const {theme}=useTheme()
  useEffect(()=>{
      const fetchData=async()=>{
          const res=await fetch("http://localhost:8000/api/items",{
            method:"GET"
          })
            const json=await res.json()


            console.log(json);


      }
      fetchData()
  },[])
  return (
   <AbouteContainer theme={theme}>

    <Info>
           <PuLL theme={theme} whileHover={{scale:1.1}}>
              Key Features
            </PuLL>
        <Title>
        Why BBC  ?

        </Title>

          <Pargraphe>
          BBC helps you in building fully responsive websites and products that match your style.
          in building full
          </Pargraphe>

    </Info>
    <ContainerCard >
       <Crad/>
       <Crad/>
       <Crad/>
       <Crad/>
    </ContainerCard>

   </AbouteContainer>
  )
}
