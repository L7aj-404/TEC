import React from 'react';
import { ContainerI, Left, Title, Description, Info, ButtonL, Contact, Phone, Right,Span } from './StyledIntro';
import NewsSlider from '../NewsSlider';
import { useTheme } from '../../../hook/useTheme';
import { useAuth } from '../../../hook/useAuth';
import { useNavigate } from 'react-router-dom';

const Intro = ({ setClick, setOpen }) => {
    const {theme}=useTheme()
    const {user}=useAuth()
    const navigate = useNavigate()
    const handelProject=()=>{
        if (user==null) {
            setOpen(true); setClick(false)
        } else {
            navigate('/requiste')
        }

    }
    return (

            <ContainerI theme={theme}>
                <Left>
                <Title>We providing <Span> Free Consulting </Span>and<Span> other services</Span></Title>
                    <Description>
                    Training Edge Consulting is a top-notch provider of professional training and consulting services for businesses. Our team of experienced professionals works closely with clients to develop customized training programs tailored to their specific needs.
                    </Description>
                    <Info>
                        <ButtonL theme={theme}  variant='outlined' onClick={handelProject}>
                            START A PROJECT
                        </ButtonL >
                        <Contact>
                            <Phone> Call Us +212 65987452</Phone>

                        </Contact>

                    </Info>
                </Left>
                {/* <Right>
                    <NewsSlider />

                </Right> */}
            </ContainerI>
    )
}

export default Intro
