import { useEffect, useState } from "react";
import {db} from "../Firebase/FirebaseConfig";
import {getUnixTime,startOfMonth,endOfMonth} from "date-fns";
import {useAuth} from "../Provider/AuthContext";





//OBTENGOS TODOS LOS GASTOS GENERAL DE SOLO ESTE MES ACTUAL, ESO ES TODOS OBTENGO LOS DATOS DE LA BASE

function useObtenerGastosMes() { 

    const [gastosdelMes,cambiarGastosdelMes] = useState([]);

    //USUARIO ACTUAL
    const {usuario} = useAuth();
   

    


    useEffect(()=>{

        //FECHA ACTUAL
        const iniciodeMes = getUnixTime(startOfMonth(new Date())); 
        const finaldeMes = getUnixTime(endOfMonth(new Date()));

        if(usuario){

            const suscricion = db.collection("gastos").orderBy("fecha","asc").where("fecha",">=", iniciodeMes).where("fecha","<=", finaldeMes).where("usuario", "==", usuario.uid).onSnapshot((snapshot)=>{


                cambiarGastosdelMes(snapshot.docs.map((documento)=>{
    
                    return {...documento.data()};
    
                }));
               
    
            });

            return suscricion;

        
        }

      
    },[usuario]);

   





    //RETORNAMOS EL VALOR
    return[gastosdelMes];

 }


 export default useObtenerGastosMes;