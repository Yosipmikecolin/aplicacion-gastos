import {db} from "./FirebaseConfig";
import { getUnixTime } from 'date-fns'




function Funcion_EditarGasto({id,categoria,descripcion,precio,fecha,SetEstado,SetAlerta}) {

    
    return(

       db.collection("gastos").doc(id).update({categoria:categoria,descripcion:descripcion,precio:Number(precio),fecha:getUnixTime(fecha)}).then(()=>{

        SetEstado(true);
        SetAlerta({tipo:"exito",mensaje:"Gasto actualizado con Exito."});
        

       }).catch((error)=>{

        SetEstado(true);
        SetAlerta({tipo:"error",mensaje:error});
       })
    );
}


export default Funcion_EditarGasto;