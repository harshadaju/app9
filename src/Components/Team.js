import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
  import Modal from './Modal'


  const TeamCard = (props) => {
    return (
      
        <Card className="card-1" style={{backgroundColor:'#f78888',border:'1px solid white',height:'98%'}}>
          <CardImg className=" img-rounded card-1" style={{border:'5px solid black'}} top width="300" height="450" src={props.src} alt="Card image cap" />
          <CardBody>
            <CardTitle style={{color:'black',fontFamily:'Chicle, cursive',fontSize:'30px'}}>{props.Name}</CardTitle>
            <CardSubtitle style={{fontFamily:  'Shadows Into Light, cursive',fontSize:'25px'}} >{props.speciality}</CardSubtitle>
            <CardText style={{fontFamily:  'Shadows Into Light, cursive',fontSize:'25px'}}>{props.discription}.</CardText>
            
            <Modal buttonLabel="Contact" img={props.src} className="card-1" />
          </CardBody>
        </Card>
      
    );
  };

  export default TeamCard;
