import {useAuth} from "../Provider/AuthContext";
import { Route,Redirect } from 'react-router-dom';

const RutaPrivada = ({children,path}) =>{

    const {usuario} = useAuth();
  

         if(usuario){

            return <Route path={path}>{children}</Route>
           

        }else{

            return <Redirect to="/iniciar-sesion"/>

        }

    }
    





export default RutaPrivada;