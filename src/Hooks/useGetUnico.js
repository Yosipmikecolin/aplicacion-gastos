import {useEffect,useState} from 'react';
import {db} from "../Firebase/FirebaseConfig";
import {useHistory} from "react-router-dom";

 function useGetUnico(id) { 

    const [gasto,Setgasto] = useState("");
    const history = useHistory();
    
    useEffect(()=>{

        db.collection("gastos").doc(id).get().then((response)=>{

            if(response.exists){

                return Setgasto({...response.data(),id:response.id});

            }else{

                return history.push("/lista-gastos");

            }
           


        }).catch((error)=>{


            console.log(error);
        })


    },[id,history]);


    return [gasto];


 }


 export default useGetUnico;