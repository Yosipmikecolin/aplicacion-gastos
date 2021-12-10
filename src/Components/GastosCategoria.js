import React, { Fragment } from 'react';
import {Header,Titulo,ContenedorHeader} from "../Elementos/Header";
import { Helmet } from 'react-helmet';
import BotonRegresar from "../Elementos/BtnRegresar";
import BarraGasto from "./BarraGasto";
import IconoCategoria from "../Elementos/IconoCategoria";
import useGetCategoria from '../Hooks/useGetCategoria';
import {ListaDeCategorias,ElementoListaCategorias,Categoria,Valor} from "../Elementos/ElementosLista_Gasto";
import Convertir_Moneda from '../Functions/ConvertirMoneda';



function GastosCategoria() { 

 
    const [gastosPorCategoria] = useGetCategoria();
   
    return(

    <Fragment>

        <Helmet>
            <title>Gasto por Categorías</title>
        </Helmet>

    <Header>
        <ContenedorHeader>
            <BotonRegresar/>
        <Titulo>Gasto por Categorías</Titulo>
        </ContenedorHeader>
    </Header>
    <ListaDeCategorias>
        {gastosPorCategoria.map((item,index)=>{

               return (

                <ElementoListaCategorias key={index}>
                    <IconoCategoria id={item.categoria}/><Categoria>{item.categoria}</Categoria>
                    <Valor>{Convertir_Moneda(item.precio)}</Valor>
                </ElementoListaCategorias>
                
               );

 
        })}
        </ListaDeCategorias>
    <BarraGasto/>

    </Fragment>
    )
 }



 export default GastosCategoria;