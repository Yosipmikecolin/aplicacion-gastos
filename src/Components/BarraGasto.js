import React from 'react';
import styled from 'styled-components';
import TemaApp from '../Theme/TemaApp';
import Convertir_Moneda from "../Functions/ConvertirMoneda";
import {useTotalMes} from "../Provider/Gasto_Mes";

function BarraGasto() { 

    const {total} = useTotalMes();
    console.log(total);
    


    return(

        <BarraTotal>
            <h4>Total gastado en el mes:</h4>
            <h4>
                {Convertir_Moneda(total)}
            </h4>
            
        </BarraTotal>
    );

 }

 const BarraTotal = styled.div`
    background: ${TemaApp.veder2};
    font-size: 1.25rem; /* 20px */
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.62rem 2.25rem; /* 10px 40px */
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: 31.25rem) { /* 500px */
        flex-direction: column;
        font-size: 14px;
    }
`;

 export default BarraGasto;