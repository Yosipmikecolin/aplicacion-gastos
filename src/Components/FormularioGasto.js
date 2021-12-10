import React, { Fragment, useEffect, useState } from 'react';
import {ContenedorFiltros,Formulario,InputGrande,ContenedorBoton} from "../Elementos/ElementosFormulario";
import {Boton} from "../Elementos/Boton";
import {ReactComponent as IconoPlus} from "../Img/plus.svg";
import styled from 'styled-components';
import SelectCategorias from './SelectCategorias';
import DatePicker from "./DatePicker";
import {useAuth} from "../Provider/AuthContext";
import Alerta from "../Elementos/Alerta";
import {fromUnixTime} from "date-fns";
import { useHistory } from 'react-router-dom';
import Convertir_Moneda from '../Functions/ConvertirMoneda';
//FUNCIONES
import Funcion_AgregarGasto from "../Firebase/Funcion_AgregarGasto";
import Funcion_EditarGasto from "../Firebase/Funcion_EditarGasto";



function FormularioGasto({gasto}) { 

    const [valoresInput,CambiarValoresInput] = useState({descripcion:"",precio:""});
    const [fecha,CambiarFecha] = useState(new Date());
    const [categoriaSelect,CambairCategoria] = useState("hogar");
    const {usuario} = useAuth();
   
    const [estadoAlerta,SetEstado] = useState(false);
    const [alerta,SetAlerta] = useState({});
    const history = useHistory();

    useEffect(()=>{
        //DESEO ACTUALIZAR
        if(gasto){

            if(gasto.usuario === usuario.uid){

                CambiarValoresInput({descripcion:gasto.descripcion,precio:Convertir_Moneda(gasto.precio)});
                CambiarFecha(fromUnixTime(gasto.fecha));
                CambairCategoria(gasto.categoria);

            }else{
                 history.push("/iniciar-sesion");
            }

            
        }




    },[gasto,usuario,history]);


    function GuardarGasto(e) { 

      e.preventDefault();
      if(!valoresInput.descripcion || !valoresInput.precio){

        SetEstado(true);
        SetAlerta({tipo:"error",mensaje:"Por favor llenar todos los campos."});
        return;

      }else{


        if(gasto){


            //SI HAY GASTOS LLAMO A UNA FUNCION Y LOS ACTUALIZA
            Funcion_EditarGasto({id:gasto.id,categoria:categoriaSelect,descripcion:valoresInput.descripcion,precio:valoresInput.precio,fecha:fecha,SetEstado:SetEstado,SetAlerta:SetAlerta}).then(()=>{

                setTimeout(()=>{

                    history.push("/lista-gastos");

                },4000);
                

            });

        }else{

            //SI NO HAY GASTO QUE ACTUALIZAR AGREGO UNO NUEVO


           
            Funcion_AgregarGasto({categoria:categoriaSelect,descripcion:valoresInput.descripcion,precio:valoresInput.precio,fecha:fecha,usuario:usuario.uid,SetEstado:SetEstado,SetAlerta:SetAlerta});
                                
            //VACIAR CAMPOS
            CambiarFecha(new Date());
            CambiarValoresInput({descripcion:"",precio:""});
            CambairCategoria("Hogar");
            return;

        }
            

      }
     }

     //OBTENGO VALORES DE LOS INPUTS
    function ObtenerInputs(e) { 

        const {name,value} = e.target;
        if(name === "precio"){

            CambiarValoresInput({...valoresInput,[name]:value.replace(/[^0-9.']/g, "")});

        }else{

            CambiarValoresInput({...valoresInput,[name]:value});
        }
     }
 //-----------------------------------


 
    return(
        
        <Fragment>
        <Alerta tipo={alerta.tipo} mensaje={alerta.mensaje}  SetEstado={SetEstado} estadoAlerta={estadoAlerta}/>
        <Formulario gasto onSubmit={GuardarGasto}>

        <ContenedorFiltros>
           <SelectCategorias categoriaSelect={categoriaSelect} CambairCategoria={CambairCategoria}/>
            <DatePicker fecha={fecha} CambiarFecha={CambiarFecha}/>
        </ContenedorFiltros>

            <div>
                <InputGrande type="text" name="descripcion" value={valoresInput.descripcion} placeholder="Descripcion" id="descripcion" onChange={ObtenerInputs}/>
                <InputGrande type="text" precio  name="precio"  value={valoresInput.precio} placeholder="$ 00.0" id="precio" onChange={ObtenerInputs}/>
            </div>

            <ContenedorBoton>
                <Boton type="submit" as="button" primario icono fontgrande>{gasto ? "Editar Gasto" : " Agregar Gasto"}<IconoBoton/></Boton>
            </ContenedorBoton>

        </Formulario>
        </Fragment>
    );


 }

 const IconoBoton = styled(IconoPlus)`
 
    width:30px;
    height:30px;
 
 `;


 export default FormularioGasto;