import React,{Fragment} from 'react';
import {Header,Titulo,ContenedorHeader} from "../Elementos/Header";
import { Helmet } from 'react-helmet';
import BotonRegresar from "../Elementos/BtnRegresar";
import BarraGasto from "./BarraGasto";
import useGetgasto from '../Hooks/useGetgasto';
import {Lista,ElementoLista,Categoria,Descripcion,Valor,Fecha,ContenedorBotones,BotonAccion,BotonCargarMas,ContenedorBotonCentral,ContenedorSubtitulo,Subtitulo} from "../Elementos/ElementosLista_Gasto";
import IconoCategoria from "../Elementos/IconoCategoria";
import Convertir_Moneda from "../Functions/ConvertirMoneda";
import {ReactComponent as IconoEliminar} from "../Img/icono-eliminar.svg";
import {ReactComponent as IconoEditar} from "../Img/icono-editar.svg";
import { Boton } from '../Elementos/Boton';
import {Link} from "react-router-dom";
import {format,fromUnixTime} from "date-fns";
import { es } from 'date-fns/locale'
import Funcion_BorrarGasto from '../Firebase/Funcion_BorrarGasto';


function ListaGastos() { 



    const [gastos,ObtenerMasGastos,cargarMas] = useGetgasto();
    
    
    


    //RECIBO LA FECHA COMO ESTA EN LA BASE DE DATOS
    //LA CONVIERTO EN FORMADO LEGIBLE
    //-------------------------------------------------------------
    const FormatearFecha = (fecha)=>{
       return format(fromUnixTime(fecha), "dd 'de' MMMM 'del' yyyy",{locale:es})
    }

    //-------------------------------------------------------------




    const FechaIgual = (gastos,index,gasto)=>{

        //SOLO LE QUITAMOS LA FECHA A LOS GASTOS QUE NO SEA EL PRIMERO
        if(index !== 0){

            //OBTENGO LA FECHA DE ESE GASTO Y LA FORMATEO
            const fechaActual = FormatearFecha(gasto.fecha);
            //OBTENGO LA FECHA DEL GASTO ANTERIOR A ESTE
            const fechaGastoAnterior = FormatearFecha(gastos[index -1].fecha);

         
            //SI HAMBAS FECHAS SON IGUALES QUITAMOS LA BARRA DE FECHA
            if(fechaActual === fechaGastoAnterior){

                return true;
            }else{

                // SI NO LA MOSTRAMOS
                return false;
            }
        }
    }

   

    return(

    <Fragment>

  
    <Helmet>
    <title>Lista de Gastos</title>
    </Helmet>

    <Header>
    <ContenedorHeader>
    <BotonRegresar/>
    <Titulo>Lista de Gastos</Titulo>
    </ContenedorHeader>
    </Header>
    
        <Lista>
        {gastos.map((gasto,index)=>{

            return(

                

               <Fragment key={gasto.id}>
                    
                   
               
                    {/* SI LA FECHA NO ES IGUAL, SOLO TOMO LA FECHA Y LA FORMATEO */}
                    {!FechaIgual(gastos,index,gasto) && <Fecha>{FormatearFecha(gasto.fecha)}</Fecha>}
                    
                    <ElementoLista>
                    
                    <Categoria>
                    <IconoCategoria id={gasto.categoria}/>
                    {gasto.categoria}
                    </Categoria>

                    <Descripcion>
                     {gasto.descripcion}
                    </Descripcion>

                    <Valor>
                    {Convertir_Moneda(gasto.precio)}
                    </Valor>


                    <ContenedorBotones>
                        <BotonAccion as={Link} to={`/editar/${gasto.id}`} >
                        <IconoEditar/>
                        </BotonAccion>

                        <BotonAccion onClick={()=>{Funcion_BorrarGasto(gasto.id)}}>
                        <IconoEliminar/>
                        </BotonAccion>
                    </ContenedorBotones>
                    </ElementoLista>
                    
                    
               </Fragment>
            );
           })}

            {cargarMas &&  
            <ContenedorBotonCentral>
            <BotonCargarMas onClick={()=>{ObtenerMasGastos()}}>Cargar Mas</BotonCargarMas>
            </ContenedorBotonCentral>}
           
            {gastos.length === 0 && 

                

            <ContenedorSubtitulo>
                <Subtitulo>No hay gastos por mostrar.</Subtitulo>
                <Boton as={Link} to="/">Agregar Gasto</Boton>
            </ContenedorSubtitulo>
            }
            </Lista>
            
            <BarraGasto/>
           
         
    
    </Fragment>
    
    )
 }





   
  
 export default ListaGastos;