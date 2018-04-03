import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import { Button,Jumbotron } from 'reactstrap';
import logo1 from './images/logo.jpg'
import OurTeam from './Components/OurTeam'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutUs from './Components/AboutUs'
import Home from './Components/Home'
import Footer from './Components/Footer'
import AmjuJpg from './images/amju.jpg'
import FahadJpg from './images/fahad.jpg'
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import appReducer from './reducers';

class App extends Component {
  render() {
    debugger;
    var style1={
      backgroundImage:"./HeaderBackground.jpg",
      bacgroundColor:"white"
    };
    var team=[];
    var stuff={
      Name:'Hashim',speciality:'Camera man',discription:'blaaa blaa blaa',src:AmjuJpg
    }
    team.push(stuff);
    var stuff1={
      Name:'Fahad',speciality:'Camera man',discription:'blaaa blaa blaa',src:FahadJpg
    }
    team.push(stuff1);
    return (
      <div>
      <Router>
      <div className="App" >
      <Navbar logo={logo1}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/AboutUs" component={AboutUs}/>

      <Route path="/Team" component={(props)=><OurTeam teams={team} />} />
      </div>
      </Router>
      <div>
        <Footer />
      </div>
      </div>
    );
  }
}

export default App;
