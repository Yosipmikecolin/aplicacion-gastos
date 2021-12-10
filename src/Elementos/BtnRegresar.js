import { useHistory } from 'react-router';
import styled from 'styled-components';
import  {ReactComponent as IconoRegresar}  from "../Img/icono-regresar.svg";

const BotonRegresar = ({ruta = "/"}) =>{

    const historial = useHistory();

    return(
         
        <Btn onClick={()=>{historial.push(ruta)}}>
            <Icono/>
        </Btn>

    );


}


const Btn = styled.button`

display:block;
width:3.12rem;
height:3.12rem;
text-align:center;
margin-right:1.25rem;
border:none;
align-items:center;
justify-content:center;
border-radius:5px;
cursor:pointer;
background-color:#fff;

@media(max-width:60rem){

width:2.5rem;
height:2.5rem;
line-height:2.5rem;

}

`;


const Icono = styled(IconoRegresar)`

    width:80%;
    height:auto;
    fill:#000;
    transition:500ms ease;


    &:hover{

        fill:#2C2E43;
    
    }

`;

export  default BotonRegresar;