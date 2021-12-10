import styled,{keyframes} from "styled-components";
import React,{Fragment, useEffect} from 'react';
import TemaApp from "../Theme/TemaApp";




   function Alerta({tipo,mensaje,estadoAlerta,SetEstado}) { 

    useEffect(()=>{
    let tiempo = setTimeout(()=>{

        SetEstado(false);

    },4000);

    //SI NO LIMPIO EL TIEMPO CADA VEZ QUE SE CAMBIA EL ESTADO ALERTA EN "TRUE" PUES MI TIEMPO SE VULEVE A EJECUTAR YA EN LOS 4 SEUNDO Y NO EN EL 0 SEGUNDO
    return ()=>{clearTimeout(tiempo)}

    },[estadoAlerta,SetEstado]);



    return(
        <Fragment>
        {estadoAlerta && 
        
            <ContenedorAlerta tipo={tipo}>
            <p>{mensaje}</p>
            </ContenedorAlerta>
            
        }
        </Fragment>
    );

    

 }


export default Alerta;




const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem); /* 20px */
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
 
    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    }
`;
 
const ContenedorAlerta = styled.div`
    z-index: 10;
    width: 100%;
    left:0;
    right:0;
    margin:auto;
    top: 1.25rem; /* 20px */
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideDown} 4s ease forwards;
 
    p {
 
        font-family: "Product Sans Regular";
        font-size:18px;
        color: #fff;
        padding: 1.25rem 2.5rem; /* 20px 40px */
        border-radius: 0.31rem; /* 5px */
        box-shadow: 0px 0px 15px rgba(0,0,0,.1);
        text-align: center;
        background: ${(props) => {
            if(props.tipo === 'error'){
                return TemaApp.rojo;
            } else if (props.tipo === 'exito') {
                return TemaApp.verde;
            } else {
                return '#000';
            }
        }};
        
    }
`;