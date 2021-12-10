function Convertir_Moneda(cantidad) { 


        return new Intl.NumberFormat(

            "en-US",
            {style:"currency",currency:"USD",minimumFractionDigits:3}

        ).format(cantidad);

     }


     export default Convertir_Moneda;