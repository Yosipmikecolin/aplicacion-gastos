import React, { Fragment,useState } from 'react';
import { Helmet } from 'react-helmet';
import {Header,Titulo,ContenedorHeader} from "../Elementos/Header";
import {Boton} from "../Elementos/Boton";
import styled from 'styled-components';
import {Formulario,InputRegistro} from "../Elementos/ElementosFormulario";
import ImagenPortada from "../Img/fondo-sesion.jpg";
import Alerta from '../Elementos/Alerta';
import { auth } from '../Firebase/FirebaseConfig';
import {useHistory} from "react-router-dom"

function InicioSesion() { 


    const history = useHistory();
    const [estadoAlerta,SetEstado] = useState(false);
    const [alerta,SetAlerta] = useState({});
    const [usuario,SetUsuario] = useState({email:"", password:"",});


   async function IniciarSesion(e) { 

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


            try {
                
               await auth.signInWithEmailAndPassword(usuario.email,usuario.password);
               history.push("/");

            } catch (error) {
                
                if(error.code === "auth/wrong-password"){

                    SetEstado(true);
                    SetAlerta({tipo:"error",mensage:"La contraseña es invalida"});

                }else if(error.code === "auth/too-many-requests"){
                    
                    
                    SetEstado(true);
                    SetAlerta({tipo:"error",mensage:"El acceso a esta cuenta se ha desactivado temporalmente debido a muchos intentos fallidos de inicio de sesión. Puede restaurarla inmediatamente restableciendo su contraseña o puede intentarlo de nuevo más tarde"});
                    
                    
                }else if(error.code === "auth/user-not-found"){
                    
                    SetEstado(true);
                    SetAlerta({tipo:"error",mensage:"No hay ningún registro de usuario que corresponda a este identificador. Es posible que el usuario haya sido eliminado"});
                    
                    
                }else{

                    console.log(error);

                }
                
            }

     }

    return(

        <Fragment>

        <Helmet>
            <title>Inicio de Sesión</title>
        </Helmet>

        <Alerta tipo={alerta.tipo} mensaje={alerta.mensage} estadoAlerta={estadoAlerta} SetEstado={SetEstado}/>
        <Header>
            <ContenedorHeader>
                <Titulo>Inicio de Sesión</Titulo>
                <div>
                <Boton to="/registro-usuario">Registro de Usuario</Boton>
                </div>
            </ContenedorHeader>
            </Header>


            <ContenedorRegistro>
            <Formulario onSubmit={IniciarSesion}>
            <span>Email</span>
            <InputRegistro type="email" value={usuario.email} onChange={(e)=>{SetUsuario({...usuario,email:e.target.value})}}/>
            <span>Paswword</span>
            <InputRegistro type="password" value={usuario.password} onChange={(e)=>{SetUsuario({...usuario,password:e.target.value})}}/>
            
            <Boton formi primario as="button" type="submit">Iniciar Sesión</Boton>
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


 export default InicioSesion;