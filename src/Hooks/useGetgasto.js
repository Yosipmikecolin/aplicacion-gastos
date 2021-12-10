import {useEffect, useState } from 'react';
import {db} from "../Firebase/FirebaseConfig";
import {useAuth} from "../Provider/AuthContext";


   function useGetgasto() { 

    const [gastos,cambiarGasto] = useState([]);
    const {usuario} = useAuth();
    const [ultimoGasto,SetultimoGasto] = useState();
    const [cargarMas,SetcargarMas] = useState(false);

    //OBTENGO LOS 5 PRIMEROS DATOS

    function ObtenerMasGastos() {

        //POR PRIMERA VEZ ME TRAE TODOS LOS GASTOS
        //DESPUES YA ME TRAE SOLO LOS PRIMERO 5 SI LOS HAY
        db.collection("gastos").where("usuario", "==", usuario.uid).orderBy("fecha","asc").limit(5).startAfter(ultimoGasto).onSnapshot((response)=>{

            if(response.docs.length > 0){

                SetcargarMas(true);
                SetultimoGasto(response.docs[response.docs.length - 1]);

                
                //OBTENGO LOS ULTIMOS 5 GASTOS Y LOS CONCATENO A LOS OBJETOS
                cambiarGasto(gastos.concat((response.docs.map((item)=>{
    
                    return {...item.data(),id:item.id};
    
                }))));

            }else{SetcargarMas(false)}

    
            });
       
      }


      //SE EJECUTA ESTO POR PRIMERA VES y ME MUESTRA SOLO 8 DESPUES 5
//-------------------------------------------------------------------------
    useEffect(()=>{

         const gastosSuscricion = db.collection("gastos").where("usuario", "==", usuario.uid).orderBy("fecha","asc").limit(8).onSnapshot((response)=>{

          
                SetcargarMas(true);
                SetultimoGasto(response.docs[response.docs.length - 1]);
                cambiarGasto(response.docs.map((item)=>{return {...item.data(),id:item.id}}));
    
         
        
        });
        
        return gastosSuscricion;

    },[usuario]);


    //-----------------------------------------------------------------

    return [gastos,ObtenerMasGastos,cargarMas];

 }


 export default useGetgasto;