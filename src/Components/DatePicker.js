import React from 'react';
import styled from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import TemaApp from '../Theme/TemaApp';
import { es } from 'date-fns/locale'
import { DateUtils } from 'react-day-picker';
import dateFnsParse from 'date-fns/parse';
function DatePicker({fecha,CambiarFecha}) { 



    function parseDate(str, format) {
        const parsed = dateFnsParse(str, format, new Date(), { locale:es });
        if (DateUtils.isDate(parsed)) {
          return parsed;
        }
        return undefined;
      }


    //FORMAT_DATE
    function formatDate(date, format) {
        return dateFnsFormat(date, format, { locale:es});
      }

      
    return(
        <ContenedorPicker>
        <DayPickerInput
          value={fecha}
          format="dd 'de' MMMM 'del' yyyy"
          formatDate={formatDate}
          parseDate={parseDate}
          onDayChange={(day)=>{CambiarFecha(day)}}
       
        />
        </ContenedorPicker>
    );
 }



 const ContenedorPicker = styled.div`


 input {
    font-family: "Product Sans Regular";
    box-sizing: border-box;
    background: ${TemaApp.azulClaro};
    border: none;
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    height: 5rem; /* 80px */
    width: 100%;
    padding: 0 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    outline:none;
    justify-content: center;
    transition: .5s ease all;

   
}


@media(max-width: 60rem){ /* 950px */
  & > * {
      width: 100%;
      margin-top:10px;
  }
}
`;

 export default DatePicker;