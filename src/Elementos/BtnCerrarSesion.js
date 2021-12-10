import React from 'react';
import {ReactComponent as IconoCerrar} from "../Img/icono-cerrar-sesion.svg";
import {Boton} from "./Boton";
import {auth} from "../Firebase/FirebaseConfig";
import {useHistory} from "react-router-dom";


function BotonCerrarSesion() { 

    const history = useHistory();

    async function CerrarSesion() { 


        try {
            
            await auth.signOut();
            history.push("/iniciar-sesion");

        } catch (error) {
            
            console.log(error);
        }

       



     }


    return(

    <Boton as="button" btncerrar onClick={CerrarSesion}>
        <IconoCerrar/>
    </Boton>

    );

 }



 

 export default BotonCerrarSesion;