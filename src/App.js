import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Boton } from './Elementos/Boton';
import {Header,Titulo,ContenedorHeader,ContenedorBotones} from "./Elementos/Header";
import BotonCerrarSesion from './Elementos/BtnCerrarSesion';
import FormularioGasto from "./Components/FormularioGasto";
import BarraGasto from './Components/BarraGasto';

function App() {


  return (

    
    <Fragment>
     
      <Helmet>
      <title>Agregar Gastos</title>
      </Helmet>
      <Header>

      <ContenedorHeader>
      <Titulo>Agregar Gasto</Titulo>
      <ContenedorBotones>
      <Boton to="/gastos-categoria">Categorías</Boton>
      <Boton to="/lista-gastos">Lista de Gastos</Boton>
      <BotonCerrarSesion/>
      </ContenedorBotones>
      </ContenedorHeader>
      </Header>

      <div>
        <FormularioGasto/>
        <BarraGasto/>

      </div>

   

    </Fragment>
  );
}

export default App;
