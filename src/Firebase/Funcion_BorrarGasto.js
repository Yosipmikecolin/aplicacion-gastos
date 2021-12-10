import {db} from "./FirebaseConfig";


function Funcion_BorrarGasto(id) { 


    db.collection("gastos").doc(id).delete().then(()=>{

        alert("Eliminado");

    }).catch((error)=>{


        alert(error);
    })


 }


 export default Funcion_BorrarGasto;