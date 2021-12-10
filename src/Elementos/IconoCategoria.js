import {ReactComponent as IconoHogar} from "../Img/icono-hogar.svg";
import {ReactComponent as IconoComida} from "../Img/icono-comida.svg";
import {ReactComponent as IconoTransporte} from "../Img/icono-transporte.svg";
import {ReactComponent as IconoCompras} from "../Img/icono-compras.svg";
import {ReactComponent as IconoPago} from "../Img/icono-pago.svg";
import {ReactComponent as IconoSalud} from "../Img/icono-salud.svg";
import {ReactComponent as IconoRopa} from "../Img/icono-ropa.svg";
import {ReactComponent as IconoDesvio} from "../Img/icono-desvio.svg";



function IconoCategoria({id}) { 

    
      

        switch(id){

            case "hogar":
            return <IconoHogar/>;

            case "comida":
            return <IconoComida/>;


            case "transporte":
            return <IconoTransporte/>;


            case "compras":
            return <IconoCompras/>;


            case "cuentas y pagos":
            return <IconoPago/>;

            case "salud e higiene":
            return <IconoSalud/>;

            case "ropa":
            return <IconoRopa/>;

            case "desvío":
            return <IconoDesvio/>;



            default:
            return "Error";


        }
    
 }

 export default IconoCategoria;