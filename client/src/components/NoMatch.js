import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../styles/nomatch.css';

class NoMatch extends Component {
  render() {
    return(
      <div className='nm-background'>
        <Header as='h1' textAlign='center'>
          Page Not Found,
          <Link to='/'> Home</Link>
        </Header>
      </div>
    );
  }
}

export default NoMatch;
