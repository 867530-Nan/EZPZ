import React from 'react'
import { Header, Segment, Button, Divider, Label, Container, Grid, Card, Dropdown } from 'semantic-ui-react'
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getActivities } from '../actions/activities'


class Activities extends React.Component {
  // state = {
  //   startDate: moment(),
  //   loaded: false,
  // }

  state = { month: '', activeIndex: 0 }

  componentDidMount = () => {
    this.props.dispatch(getActivities())
    // this.setState({ loaded: true })
  }

  tick =() => {
    let activeIndex = this.state.activeIndex;
    if (activeIndex == this.props.users.length - 1){
      activeIndex = 0;
      } else {
        activeIndex++;
        }
    this.setState({
      activeIndex
    });
  }

  showActivities = () => {

      let visible = this.props.activities;
      if (this.state.month)
        visible = this.props.activities.filter( a => a.date === this.state.month )
      return (
        <Grid.Column computer={4} >
          <Card>
            <Card.Content>
              <Card.Header>
              { this.state.activities.activeIndex.name }
              </Card.Header>
              <Card.Meta>
              { this.state.activeIndex.date }
              </Card.Meta>
              <Card.Meta>
              { this.state.activeIndex.time }
              </Card.Meta>
              <Card.Description>
              { this.state.activeIndex.description }
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
              <Button basic color='green'>Approve</Button>
              <button className = "btn btn-default" onClick={this.tick} >
                  Show Next Activity
              </button>
              </div>
            </Card.Content>
          </Card>
        </Grid.Column>
      )
  //   })
  }

  monthOptions = () => {
    let { months } = this.props;
    return months.map( (month, index) => { return { key: index, text: month, value: month}})
  }





  render() {
    let { month } = this.state;
    if(!this.props.activities) {
      return(<div>loading</div>)
    }
    debugger
    return(
      <Container>
        <Header as='h3' textAlign="center">Activities</Header>
        <Dropdown
          placeholder="Select Month to Play"
          fluid
          selection
          options={this.monthOptions()}
          onChange={ (e, data) => this.setState({ month: data.value }) }
          value={month}
          />
          { month &&
              <Button
                fluid
                basic
                onClick={ () => this.setState({ month: '' }) }
              >
              Clear Filter: {month}
              </Button>
              }
              <Divider />
          <Grid columns={16}>
            <Grid.Row>
              { this.showActivities() }
            </Grid.Row>
          </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const activities = state.activities;
  const months = [...new Set(state.activities.map( a => a.date ))]
  return { activities, months }
}

export default connect(mapStateToProps)(Activities);
