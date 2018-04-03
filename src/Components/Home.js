import React from 'react'
import Caursal from './Coursal'
import {Container,Row,Col} from 'reactstrap'
import starsAlign from './../images/logo.jpg'
import AvailableOffers from './../images/IMG-20180402-WA0001.jpg'
import Stars from './Starts'

class Home extends React.Component{
  render(){
    return(
      <div style={{borderBottom:'1px solid white'}}>
        <Caursal />
        <div  style={{borderTop:'1px solid white'}}>
        <Container className="Container">
        <Row >
        <Col className="col-sm-3 col-md-3 col-lg-3">        
          <p  style={{fontFamily:  'Shadows Into Light, cursive',opacity:'0.8',textAlign:'center',color:'white',fontSize:'60px',borderBottom:'6px double white',borderBottomStyle:'doubledashed'}}>Starsalign</p>
          </Col>
          </Row>
          <Row>
          <Col>
            <p style={{fontSize:'20px',fontFamily  :'Hind Siliguri, sans-serif',fontWeight:'normal',wordSpacing:'10px'}}>I should write something here as to fill the gap and something more more ljsdf;lasjfajuf asdflkjasdf dlasfjasld fjdlasfjdlasvnkasdvnkajghfasd;k vnakjdf hgfdashf kjasdvghfdhkasg das ghasdfhasd kldhfas asdf dhjasf kasdhf asldfa kadhsf ladfkshadksf kadhfs dkasfklhka dsfkjadhsfhj fvkjasbvnfkdjasghfkasdj hfldjs fdhnaskjdashg aslfj dasfasdlghf asglasgfjaa dsfljg dlfkjads aori lajsfldjasf alsdfj alvgnkajfgha ds;kagnj;a krhjoqai j''ladsnjvfas gfjadfklsvnalsdnvfgag;lj afvgnadfsg</p>
            </Col>
          </Row>
          <Stars />
          <img src={AvailableOffers } />
        </Container>
        </div>
      </div>
    )
  }
}
export default Home;
