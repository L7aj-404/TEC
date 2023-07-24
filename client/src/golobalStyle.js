import styled ,{createGlobalStyle} from "styled-components";


 const GlobleStyle=createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:"Glacial";


}




`
export default GlobleStyle
export const  Container=styled.div`


z-index:1;
width:100%;
max-width:1300px;
margin-left:auto;
margin-right:auto;
padding-left:50px;
padding-right:50px;


@media screen and (max-width:991px) {
    padding-left:30px;
padding-right:30px;
}



`

export const ContainerComponent=styled(Container)`

display:flex;
justify-content:center;
align-items:center;
height:85vh;
${Container}

`


