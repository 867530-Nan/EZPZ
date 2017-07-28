import React from 'react';
import { connect } from 'react-redux'
import { Accordion, Label, Message, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const panels = ( {userActivities = []} ) => {
		return (
			userActivities.map( (activity, i) => {
				return(
				<Accordion>
			  	<Accordion.Title>
			      <Icon name='dropdown' />
			      {activity.name} - {activity.time}
			    </Accordion.Title>
			    <Accordion.Content>
			      <p>
			        Three common ways for a prospective owner to acquire a dog is from pet shops,
			        {' '}private owners, or shelters.
			      </p>
			      <p> A pet shop may be the most convenient way to buy a dog.
			        {' '}Buying a dog from a private owner allows you to assess the pedigree and
			        {' '}upbringing of your dog before choosing to take it home. Lastly, finding your dog
			        {' '}from a shelter, helps give a good home to a dog who may not find one so readily.
			      </p>
		    	</Accordion.Content>
	    	</Accordion>
	 		)
 		}
 	))
}

const ItineraryView = () => (
  <Accordion panels={panels} />
)

export default connect()(ItineraryView);
