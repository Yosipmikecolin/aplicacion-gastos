import { createContext, useContext, useEffect, useState } from "react";
import useObtenerGastosMes from "../Hooks/useObtenerGastosMes";



//ESTOY SUMANDO LOS PRECIOS DE CADA GASTO A UN ESTADO Y ESE ESTADO LO PASO AL  PROVEEDOR GLOBAL

const ContextoTotal = createContext();

//CREO UN ESTADO GLOBAL PARA TENER ACESSO A EL GASTO TOTAL DEL MES
const useTotalMes = ()=>{return useContext(ContextoTotal)};

 function TotalGastoProvider({children}){

    //GASTOS DEL TODO EL MES
    const [gastosdelMes] = useObtenerGastosMes();
    const [total,totalGastado] = useState(0);
    

    //RECORRO TODOS LOS GASTOS DEL MES AL CARGAR LA PAGINA
    useEffect(()=>{

        let acumulado = 0;
        gastosdelMes.forEach((item)=>{

        acumulado += item.precio;
        
        
       });

       totalGastado(acumulado);

    },[gastosdelMes]);

    

    return(

        <ContextoTotal.Provider value={{total}}>
            {children}
        </ContextoTotal.Provider>

    );

 }


 export {TotalGastoProvider,useTotalMes};