import styled from 'styled-components';
import TemaApp from '../Theme/TemaApp';



const ContenedorFiltros = styled.div`

    display:flex;
    justify-content:space-between;
    margin-bottom:1.87rem;

    @media(max-width:60rem){

        flex-direction:column;

        * > {

            width:100%;
            margin-bottom:0.62rem;

        }
    }
`;


const Formulario = styled.form`

     padding:0 2.5rem;
     height:92.7%;
     display:flex;
     flex-direction:column;
     width:${props =>props.gasto ? "100%;" : "50%;"};
    


     span{

        color:${TemaApp.grisClaro};
        display:block;
        margin-top:2rem;
     }


     button{

        cursor:pointer;
     }
    
 


    @media(max-width:60rem){
   
        width:100%;
      }

`;



const InputRegistro = styled.input`

margin-top:1rem;
font-size:1.1rem;
font-weight:bold;
font-family: "Product Sans Regular" , "Arial";
border:none;
border: solid 2px #2C2E43;
background-color:#fff;
transition:500ms ease;
outline:none;
padding:1rem;
border-radius:10px;

&:focus{

    border: solid 2px #5C33F6;

}

`;



const InputGrande = styled.input`

     padding:40px 20px;
     width:100%;
     font-size:3rem;
     font-family: "Product Sans Regular";
     text-align:center;
     font-weight:${props =>props.precio ? "bold;" : "normal;"};
     margin:3px;
     border:none;
     border-bottom: solid 2px #D8E3E7;
     outline:none;

     &::placeholder{

        color:#DDDDDD;
        
     }

     @media(max-width:60rem){

        font-size:2.2rem;
     }


`;


const ContenedorBoton = styled.div`

     display:flex;
     justify-content:center;
     margin:2.5rem 0;

`;


export {ContenedorFiltros,Formulario,InputGrande,InputRegistro,ContenedorBoton};