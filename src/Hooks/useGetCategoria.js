import { useEffect, useState } from "react";
import useObtenerGastosMes from "../Hooks/useObtenerGastosMes";

function useGetCategoria() { 

 
    const [gastosCategoria,cambiargastosCategoria] = useState([]);
    const [gastosdelMes] = useObtenerGastosMes();
    

    useEffect(()=>{

//EL OBJECTO ACUMULADOR ES EL OBJECTO DE CATEGORIAS CON PRECIOS QUE ESTA AL FINAL
        const sumaDeGastos = gastosdelMes.reduce((ObjectoAcumulador, GastoActual) => {
        const categoriaActual = GastoActual.categoria;
        const precioActual = GastoActual.precio;
    
        
        ObjectoAcumulador[categoriaActual] += precioActual;
        return ObjectoAcumulador;
    
        },{
    
            "comida": 0,
            "cuentas y pagos": 0,
            "hogar": 0,
            "transporte": 0,
            "ropa": 0,
            "salud e higiene": 0,
            "compras": 0,
            "desvío": 0,
    
        });
    
        console.log("La suma es: ",sumaDeGastos)
        //DEVOLVEMOS UN ARRAY CON EL METODO Object.keys() Y DENTRO EL OBJETO DE GASTOS CON SUS GATEGORIAS LOS RECORREMOS PARA 
        cambiargastosCategoria(Object.keys(sumaDeGastos).map((categoria)=>{
    
            console.log(categoria)
            return {categoria:categoria,precio:sumaDeGastos[categoria]};
    
        }));
    


    },[gastosdelMes]);

    



    return [gastosCategoria];

}
 export default useGetCategoria;