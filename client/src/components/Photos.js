import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleUpload, fetchPhotos } from '../actions/photos';
import { Segment, Image, Divider, Header, Grid } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import '../styles/photos.css';

class Photos extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPhotos());
  }

  onDrop = (photos) => {
    // dispatch the handleUpload action pass it the photo
    this.props.dispatch(handleUpload(photos[0]));
  }

  displayPhotos = () => {
    // map through the state of photo and display them
    return this.props.photos.map( photo => {
      return(
        <Segment key={photo.id}>
          <Image src={photo.url} fluid />
        </Segment>
      );
    });
  }

  render() {
    return(
      <Segment basic>
        <Dropzone
          onDrop={this.onDrop}
          style={{ width: '100%', height: '100px', border: '1px dashed black'}}
        >
          <Header as='h4'>Try dropping some files or clicking here to upload!</Header>
        </Dropzone>
        <Segment basic>
          <Header as='h2'>Family Photos!</Header>
          <Divider />
          <div className='photos'>
            { this.displayPhotos() }
          </div>
        </Segment>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { photos: state.photos };
}

export default connect(mapStateToProps)(Photos);
