import Container from 'react-bootstrap/Container';
import React from 'react';
import {PhoneFill, Mailbox, MapFill} from 'react-bootstrap-icons';
import '../styles/TopDetails.css'


function TopDetails(){
    return(
  
      <div className='Details'>
       <Container color='warning' >

      <div className='row' lg='1'  md='6' sm ="12" color='warning'>

        <div className='col' md ='3' sm="12" >
        <b>alphamunene007@gmail.com</b> <span>
        <Mailbox color= 'red' />  </span>
        </div>
        
        <div className='col' md ='3' sm="12" >
        <b>0113552420</b> <span>
        <PhoneFill color='red' /> </span>
        </div>

        <div className='col' md ='3' sm="12" >
        <b>0769009184</b> <span>
        <PhoneFill color='red' /> </span>
        </div>

      </div>
      <div className='col' md ='3' sm="12" >
        <i> Kangudo road off Eastern Bypass,Chokaa, next to Quality Meat Packers </i>  <span>
        <MapFill color= 'red' />  </span>
        </div>
       </Container>
       </div>
    )
}

export default TopDetails;