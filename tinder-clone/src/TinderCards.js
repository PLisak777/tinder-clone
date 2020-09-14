import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';

function TinderCards() {
	const [people, setPeople] = useState([]);

	// code that runs based on a condition
	useEffect(() => {
		const unsubscribe = database
		.collection('people')
		.onSnapshot((snapshot) => 
			setPeople(snapshot.docs.map(doc => doc.data()))
		);

		return () => {
			// this is cleanup
			unsubscribe();
		};
	// this will run once on comp load and never again
	}, []);

	// WRONG
	// const people = [];
	// people.push('sonny', 'cher')

	// RIGHT (Push to an array with REACT)
	// setPeople([...people, 'sonny', 'cher'])

	return (
		<div>
		<div className="tinderCards__cardContainer">
			{people.map((person) => (
				<TinderCard
					className='swipe'
					key={person.name}
					preventSwipe={['up', 'down']}>
					<div
						style={{ backgroundImage: `url(${person.url})` }}
						className='card'>
						<h3>{person.name}</h3>
					</div>
				</TinderCard>
			))}
			</div>
		</div>
	)
}

export default TinderCards
