import styled from "styled-components";
import { Link } from "react-router-dom";
import TemaApp from "../Theme/TemaApp";

const Boton = styled(Link)`

background-color:${props => props.primario ? TemaApp.colorPrimario : TemaApp.colorSecundario};
color:white;
padding:${props => props.btncerrar ? "15px 20px;" : "20px 20px;"} 
font-size:${props => props.fontgrande ? "1.5rem;" : "18px;"};
border:none;
border-radius:5px;
text-decoration:none;
text-align:center;
transition:1s ease;
display:flex;
justify-content:space-evenly;
cursor:pointer;
margin:${props => props.formi ? "40px 5px 20px 5px;" : "5px;"};
width:${props => props.icono ? "300px;" : "auto"};


&:hover{

    background-color:${props => props.primario ? TemaApp.hoverPrimario : TemaApp.hoverSecundario};
}

svg{

    fill:#fff;
    margin-top:auto;
    margin-bottom:auto;
}


`;


export  {Boton};