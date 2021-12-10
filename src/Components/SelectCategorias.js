import React, { useState } from 'react';
import styled from 'styled-components';
import TemaApp from "../Theme/TemaApp";
import  IconoAbajo from "../Img/flecha-abajo.png";
import IconoCategoria from '../Elementos/IconoCategoria';

function SelectCategorias({categoriaSelect,CambairCategoria}) { 

    const [mostrarSelect,CambiarSelect] = useState(false);
   

    function HandleSubmit(e) { 

        CambairCategoria(e.currentTarget.dataset.valor);


     }

    const categorias = [
        {id: 'comida', texto: 'Comida'},
        {id: 'cuentas y pagos', texto: 'Cuentas y pagos'},
        {id: 'hogar', texto: 'Hogar'},
        {id: 'transporte', texto: 'Transporte'},
        {id: 'ropa', texto: 'Ropa'},
        {id: 'salud e higiene', texto: 'Salud e Higiene'},
        {id: 'compras', texto: 'Compras'},
        {id: 'desvío', texto: 'Desvío'}
    ]

    return(

        <ContenedorSelect onClick={()=>{CambiarSelect(!mostrarSelect)}}>
            <OpcionSeleccionada>{categoriaSelect} <img src={IconoAbajo} alt="flecha-abajo"/></OpcionSeleccionada>

            {mostrarSelect && 
                <Opciones>
               {categorias.map((item)=>{

                   return  <Opcion key={item.id} onClick={HandleSubmit} data-valor={item.id}> <IconoCategoria id={item.id}/> {item.texto}</Opcion>

               })}
                </Opciones>
            }
        </ContenedorSelect>
    );


 }




 const ContenedorSelect = styled.div`

    background: ${TemaApp.azulClaro};
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    position: relative;
    height: 5rem; /* 80px */
    width: 40%;
    padding: 0px 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    &:hover {
        background: ${TemaApp.azulClaro2};
    }

    @media(max-width: 60rem){ /* 750px */
        & {
            width: 100%;
            margin-bottom:10px;
            
        }
    }
`;
 
const OpcionSeleccionada = styled.div`
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        width: 1.25rem; /* 20px */
        height: auto;
        margin-left: 1.25rem; /* 20px */
    }
`;
 
const Opciones = styled.div`
    background: ${TemaApp.azulClaro3};
    position: absolute;
    top: 5.62rem; /* 90px */
    left: 0;
    width: 100%;
    border-radius: 0.625rem; /* 10px */
    max-height: 18.75rem; /* 300px */
    overflow-y: auto;
`;
 
const Opcion = styled.div`
    padding: 1.25rem; /* 20px */
    display: flex;
    svg {
        width: 28px;
        height: auto;
        margin-right: 1.25rem; /* 20px */
    }
    &:hover {
        background: #96BAFF;
    }
`;

 export default SelectCategorias;