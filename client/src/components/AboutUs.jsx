import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../styles/about.css';

class AboutUs extends Component {
  render() {
    return(
      <div as='h1' textAlign='center' className="pokemon" responsive>
      Family Fun Time!!
      </div>
    );
  }
}

export default AboutUs;
