import React,{createContext, useContext, useEffect, useState} from 'react';
import {auth} from "../Firebase/FirebaseConfig";

   
 const AuthContext = createContext();
 //CREO UNA COSTANTE PARA PODER UTILIZAR EL ETADO GLOBAL
 const useAuth = ()=> {
              
         return useContext(AuthContext);

        }


      function AuthProvider({children}) { 

        const [usuario,SetUsuario] = useState();
        const [cargando,CambiarCargando] = useState(false);
        useEffect(()=>{

                const suscripcion = auth.onAuthStateChanged((estado)=>{
                SetUsuario(estado);
                CambiarCargando(true);

            });

            return suscripcion;

            },[]);

            return(

            <AuthContext.Provider value={{usuario}}>
            { cargando && children}
            </AuthContext.Provider>
            );
    }


 export  {useAuth,AuthProvider};


 