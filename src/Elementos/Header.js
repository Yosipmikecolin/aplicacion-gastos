import styled from "styled-components";


const Header = styled.div`

    width:100%;
    padding:2.5rem;
    display:flex;
    justify-content-center:space-between;
`;


const ContenedorHeader = styled.div`

 width:100%;
 display:flex;
 justify-content:space-between;


 @media(max-width:60rem){

    display:flex;
    flex-direction:column-reverse;
    align-items:center;
   
   

    & > div {

        display:flex;
        margin-bottom:1.5rem;
        justify-content:end;
        
    }

 }
`;




const Titulo = styled.h1`


    font-weight:bold;
    text-transform:uppercase;
    font-size:2.5rem;
    -moz-font-family: "Product Sans Regular";


    @media(max-width:60rem){

        font-size:2rem;
    }
`;




const ContenedorBotones = styled.div`

 display:flex;
 justify-content:space-between;
 align-items:center;


`;


export {Header,Titulo,ContenedorHeader,ContenedorBotones}

