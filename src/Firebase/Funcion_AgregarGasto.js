import {db} from "./FirebaseConfig";
import { getUnixTime } from 'date-fns';


function Funcion_AgregarGasto({categoria,descripcion,precio,fecha,usuario,SetEstado,SetAlerta}) {
    
    
    return(

       db.collection("gastos").add({categoria:categoria,descripcion:descripcion,precio:Number(precio),fecha:getUnixTime(fecha),usuario:usuario}).then(()=>{

        SetEstado(true);
        SetAlerta({tipo:"exito",mensaje:"Gasto guardado con Exito."});

       }).catch((error)=>{

        SetEstado(true);
        SetAlerta({tipo:"error",mensaje:error});
       })
    );
}


export default Funcion_AgregarGasto;