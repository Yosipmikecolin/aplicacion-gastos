import React,{Fragment} from 'react';
import {Header,Titulo,ContenedorHeader} from "../Elementos/Header";
import { Helmet } from 'react-helmet';
import BotonRegresar from "../Elementos/BtnRegresar";
import BarraGasto from "./BarraGasto";
import FormularioGasto from "./FormularioGasto";
import { useParams } from 'react-router-dom';
import useGetUnico from '../Hooks/useGetUnico';


function EditarGastos() { 


    //OBTENGO EL ID DEL PARAMETRO
    const {id} = useParams();
    const [gasto] = useGetUnico(id);
    
   

   

    return(

        <Fragment>

        <Helmet>
            <title>Editar Gasto</title>
        </Helmet>

       <Header>
        <ContenedorHeader>
            <BotonRegresar ruta="/lista-gastos"/>
        <Titulo>Editar Gasto</Titulo>
        </ContenedorHeader>
       </Header>

       <FormularioGasto gasto={gasto}></FormularioGasto>
       <BarraGasto/>

    </Fragment>
    )
 }



 export default EditarGastos;