import React from 'react'
import logo from './../images/logo.jpg'

export default class Footer extends React.Component{
  render()
  {
    return(
      <footer className="footer">
      <img src={logo} width="140" height="200" />
        <p>Harshad Ahammed</p>
      </footer>
    )
  }
}
