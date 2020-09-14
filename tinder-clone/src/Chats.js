import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
	return (
		<div className="chats">
			<Chat
				name="Elon"
				message="Tesla for 🍆"
				timestamp="40 seconds ago"
				profilePic="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
			/>
			<Chat
				name="Ellen"
				message="faggot"
				timestamp="40 seconds ago"
				profilePic="https://s31242.pcdn.co/wp-content/uploads/2020/07/ellen-degeneres-show.jpeg"
			/>
			<Chat
				name="Sleeb"
				message="lol am ded"
				timestamp="40 seconds ago"
				profilePic="https://image.cnbcfm.com/api/v1/image/100496736-steve-jobs-march-2011-getty.jpg?v=1513863842&w=1600&h=900"
			/>
			<Chat
				name="Zuck"
				message="meep morp"
				timestamp="40 seconds ago"
				profilePic="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F0318786e-5977-11ea-8d8f-51ad578bbcfe.jpg?crop=1999%2C1333%2C0%2C0"
			/>
		</div>
	);
}

export default Chats;
