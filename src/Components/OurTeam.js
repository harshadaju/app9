import React from 'react'

import {Row,Col} from 'reactstrap'

import Modal from './Modal'

class OurTeam extends React.Component{
constructor(props)
{
  super(props);
  
  this.state={
    list:true
  };
}
TeamMembers(teamMembers)
{
  debugger;
    var team=[];
    for(var i=0;i<teamMembers.length;i++)
    {
      team.push(
        <Col Key={i}>
        <Modal  Name={teamMembers[i].Name} speciality={teamMembers[i].speciality} discription={teamMembers[i].discription} src={teamMembers[i].src} />
        </Col>
      )
    }
    return(
   <Row style={{marginTop:'3%'}}>
    {team}
   </Row>
   );
}
 render(){
    debugger;
    return(
      <div className="container">
      {this.TeamMembers(this.props.teams)}
      </div>);
    }
}

export default OurTeam;
