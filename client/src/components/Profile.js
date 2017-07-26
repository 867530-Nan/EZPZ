import React, { Component } from 'react';
import { Header, Segment, Button, Divider, Container, Image, Card } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';
import { handleUpload } from '../actions/photos';
import { connect } from 'react-redux';
import avatar from '../photodump/avatar1.jpg';
import '../styles/profile.css';

class Profile extends Component {

  onDrop = (photos) => {
    this.props.dispatch(handleUpload(photos[0]));
  }

  render() {

    const images = this.props.user.image_url.map( image => {
      return(
        <Segment>
        <Image src={image} fluid />
        </Segment>
      )
    })

    return(
      <div>
        <Dropzone
          onDrop={ this.onDrop }
          style={{ width: '100%', height: '100px', border: '1px dashed black'}}
        >
          <Header as='h4'>Try dropping some files or clicking here to upload!</Header>
        </Dropzone>
        <Segment basic>
          <Header as='h2'>Family Photos!</Header>
          <Divider />
          <Segment.Group horizontal compact className='photos'>
            { images }
          </Segment.Group>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
}

export default connect(mapStateToProps)(Profile);
