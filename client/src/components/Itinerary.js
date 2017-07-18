import React from 'react';
import { Header, Grid, Container } from 'semantic-ui-react';
import { getSavedActivities } from '../actions/itinerary'
import { connect } from 'react-redux'
import ItineraryView from './ItineraryView'

class Itinerary extends React.Component {
  state = { visible: [] }

  componentWillMount() {
    this.props.dispatch(getSavedActivities(this.setActivities));
  }

  setActivities = (activities) => {
    this.setState({ visible: activities });
  }

  showActivities = () => {
    return this.props.userActs.map( activity =>
      <Container>
            <p>{activity.name}</p>
      </Container>

    )
  }

  render() {
    console.log(this.props)
    return (
      <Container>
        <Header as='h3' textAlign='center'>Itinerary</Header>
          <Grid column={16}>
            <Grid.Row>
              { this.showActivities }
            </Grid.Row>
          </Grid>
        </Container>



    )
  }

}

const mapStateToProps = (state) => {
  const userActivities = state.userActs
  return { userActivities }
}

export default connect(mapStateToProps)(Itinerary);
