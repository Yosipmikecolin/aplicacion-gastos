import React, { Fragment } from 'react';
import styled from 'styled-components';




function Fondo() { 


    return(

        <Fragment>
             <Svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 1440 320"><path fill="#000"
             fillOpacity="1" 
             d="M0,32L34.3,26.7C68.6,21,137,11,206,26.7C274.3,43,343,85,411,117.3C480,149,549,171,617,197.3C685.7,224,754,256,823,250.7C891.4,245,960,203,1029,181.3C1097.1,160,1166,160,1234,138.7C1302.9,117,1371,75,1406,53.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
            </path>
            </Svg>
        </Fragment>
    );


 }



const Svg = styled.svg`

position:fixed;
bottom:0;

`;





export default Fondo;
