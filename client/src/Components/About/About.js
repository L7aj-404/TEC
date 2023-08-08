import { useEffect, useState } from "react"
import { Card, Crad } from "./Card"
import  {AbouteContainer,Info,PuLL,Title,Pargraphe,ContainerCard} from "./style"
import { useTheme } from "../../hook/useTheme"
import axios from "axios"
import { Back_end_Url } from "../../api/URLs"

export default function About() {

const {theme}=useTheme()
const [infos, setInfos] = useState([]);

useEffect(() => {
    async function fetchServices() {
        try {
            const response = await axios.get(Back_end_Url+'/api/about');
            setInfos(response.data);
            console.log(response.data); // Check if data is received
        } catch (err) {
            console.error(err);
        }
    }
    fetchServices();
}, []);
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
        {
            infos.map((item,index)=>
            <Crad key={index} title={item.title} text={item.description} />
            )
        }

    </ContainerCard>

   </AbouteContainer>
  )
}
