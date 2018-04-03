import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import logo from './images/logo.jpg'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  addBootomBorder(){

  }
  
  render() {
    var navItemStyle={
      //fontFamily:'Berkshire Swash, cursive',
      color:'white',
      //fontFamily:'Chicle, cursive',
      fontFamily  :'Hind Siliguri, sans-serif',
      //color:'#f26a6a',
      fontSize:'18px'
    }
    return (
      <div className="mask">
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/" >  <p className="appTitle " style={{fontFamily:  'Shadows Into Light, cursive',opacity:'0.8'}}>STARSALIGN</p></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="navItem">
                <NavLink href="/Gallery" style={navItemStyle} >Gallery</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/Team" style={navItemStyle} >Team</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/AboutUs" style={navItemStyle} >About Us</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={navItemStyle}>
                  Options
                </DropdownToggle>
                <DropdownMenu right >

                  <DropdownItem  className="navItem1">
                    Option 1
                  </DropdownItem>
                  <DropdownItem className="navItem1">
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider style={{bacgroundColor:'black',fontWeight:'bold',fontSize:'23px',fontFamily:  'Shadows Into Light, cursive',}} />
                  <DropdownItem className="navItem1">
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
