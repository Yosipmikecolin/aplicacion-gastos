import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contenedor from './Elementos/Contenedor';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import InicioSesion from "./Components/InicioSesion";
import EditarGastos from "./Components/EditarGastos";
import GastosCategoria from "./Components/GastosCategoria";
import ListaGastos from "./Components/ListaGastos";
import Registro from "./Components/Registro";
import {Helmet} from "react-helmet";
import favicon from "./Img/calculadora.png";
import Fondo from "./Components/Fondo";
import {AuthProvider} from "./Provider/AuthContext";
import RutaPrivada from './Components/RutasPrivadas';
import {TotalGastoProvider} from "./Provider/Gasto_Mes";

const Index = () => {

    return(
        <Fragment>
        
        <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
        <title>Gasto Mensual</title>
        </Helmet>


            <Fondo/>
            <AuthProvider>
            <TotalGastoProvider>
            <BrowserRouter>
            <Contenedor>
            <Switch>


                <Route path="/iniciar-sesion">
                <InicioSesion/>
                </Route>


                <Route path="/registro-usuario">
                <Registro/>
                </Route>


                <RutaPrivada path="/gastos-categoria">
                    <GastosCategoria/>
                </RutaPrivada>


                <RutaPrivada path="/lista-gastos">
                    <ListaGastos/>
                </RutaPrivada>

                
                <RutaPrivada path="/editar/:id" >
                    <EditarGastos/>
                </RutaPrivada>
                


                <RutaPrivada path="/">
                    <App/>
                </RutaPrivada>



            </Switch>
            </Contenedor>
            </BrowserRouter>
            </TotalGastoProvider>
            </AuthProvider>
            </Fragment>
    );

}
ReactDOM.render(<Index/>,document.getElementById('root'));

