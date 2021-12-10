import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import {Header,Titulo,ContenedorHeader} from "../Elementos/Header";
import {Boton} from "../Elementos/Boton";
import styled from 'styled-components';
import {Formulario,InputRegistro} from "../Elementos/ElementosFormulario";
import ImagenPortada from "../Img/portada-form.jpg";
import {auth} from "../Firebase/FirebaseConfig";
import { useHistory } from 'react-router-dom';
import Alerta from '../Elementos/Alerta';

function Registro() { 


    const history = useHistory();
    const [estadoAlerta,SetEstado] = useState(false);
    const [alerta,SetAlerta] = useState({});
    const [usuario,SetUsuario] = useState({

        email:"",
        password:"",
        password2:""

    });


    function ObtenerDatosDelUsuario(e) {

        let {name,value} = e.target;
        SetUsuario({...usuario,[name]:value});

      }


      async function RegistrarUsuario(e) { 

            e.preventDefault();
           
            

            //Validas Campos vacios
            if(usuario.email === "" || usuario.password  === "" || usuario.password2  === ""){

                SetEstado(true);
                SetAlerta({tipo:"error",mensage:"Por favor llena todos los campos."});
                return;

            }

            //Validas Correo
            const ExpresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
            if(!ExpresionRegular.test(usuario.email)){

                
                SetEstado(true);
                SetAlerta({tipo:"error",mensage:"El correo no es valido"});
                return;
            }

            //Validas coincidencia de contraseñas
            if(usuario.password !== usuario.password2){

                SetEstado(true);
                SetAlerta({tipo:"error",mensage:"Las contraseñas no coinciden"});
                return;
            }

            
            try {
                
               await auth.createUserWithEmailAndPassword(usuario.email,usuario.password);
               history.push("/");

            } catch (error) {
               
                if(error.code === "auth/email-already-in-use"){

                    SetEstado(true);
                    SetAlerta({tipo:"error",mensage:"La dirección de correo electrónico ya está siendo utilizada por otra cuenta."});
                   

                }else if(error.code === "auth/weak-password"){

                    SetEstado(true);
                    SetAlerta({tipo:"error",mensage:"La contraseña debe tener al menos 6 caracteres."});

                }
            }
      
        
           
       }

    return(
        <Fragment>
        <Alerta tipo={alerta.tipo} mensaje={alerta.mensage} estadoAlerta={estadoAlerta} SetEstado={SetEstado}/>
        <Helmet>
            <title>Registro de Usuario</title>
        </Helmet>

        <Header>
            <ContenedorHeader>
                <Titulo>Crear Cuenta</Titulo>
                <div>
                <Boton to="/iniciar-sesion">Iniciar Sesión</Boton>
                </div>
            </ContenedorHeader>
        </Header>


            <ContenedorRegistro>
            <Formulario onSubmit={RegistrarUsuario}>
            <span>Email</span>
            <InputRegistro type="email" name="email" value={usuario.email}   onChange={ObtenerDatosDelUsuario}/>
            <span>Paswword</span>
            <InputRegistro type="password" name="password" value={usuario.password}  onChange={ObtenerDatosDelUsuario}/>
            <span>Repetir Password</span>
            <InputRegistro type="password" name="password2" value={usuario.password2} onChange={ObtenerDatosDelUsuario}/>
            <Boton formi primario as="button" type="submit">Crear Cuenta</Boton>
            </Formulario>

            <PortadaFormulario>
                <img src={ImagenPortada} alt="portada-form"/>
            </PortadaFormulario>
                
            </ContenedorRegistro>
           

        

        </Fragment>
    )
 }


const ContenedorRegistro = styled.div`

 width:100%;
 height:100%;
 display:flex;
 justify-content:center;
 align-items:center;
 box-shadow: 0px 6px 11px 5px #686868;

 @media(max-width:60rem){
   
    display:flex;
    flex-direction:column;
    height:auto;
  }

`;


 const PortadaFormulario = styled.div`
 
    width:50%;
    height:100%;
   
    img{
        width:100%;
        height:100%;
        object-fit:cover;

    }

    @media(max-width:60rem){
   
        width:100%;
      }
    

 
 `;


 export default Registro;