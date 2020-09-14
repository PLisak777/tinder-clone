import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen() {
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([
		{
			name: 'Ellen',
			image:
				'https://s31242.pcdn.co/wp-content/uploads/2020/07/ellen-degeneres-show.jpeg',
			message: 'Sup nigga',
		},
		{
			name: 'Ellen',
			image:
				'https://s31242.pcdn.co/wp-content/uploads/2020/07/ellen-degeneres-show.jpeg',
			message: "don't ignore me faggot",
		},
		{
			message: 'bitch bye',
		},
	]);

	const handleSend = (e) => {
		e.preventDefault();

		setMessages([...messages, { message: input }]);
		setInput('');
	};

	return (
		<div className="chatScreen">
			<p className="chatScreen__timestamp">
				YOU MATCHED WITH ELLEN ON 10/08/2020
			</p>

			{messages.map((message) =>
				message.name ? (
					<div className="chatScreen__message">
						<Avatar
							className="chatScreen__image"
							alt={message.name}
							src={message.image}
						/>
						<p className="chatScreen__text">{message.message}</p>
					</div>
				) : (
					<div className="chatScreen__message">
						<p className="chatScreen__textUser">{message.message}</p>
					</div>
				)
			)}

			<div>
				<form className="chatScreen__input">
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="chatScreen__inputField"
						type="text"
						placeholder="Type a message"
					/>
					<button
						type="submit"
						onClick={handleSend}
						className="chatScreen__inputButton"
					>
						SEND
					</button>
				</form>
			</div>
		</div>
	);
}

export default ChatScreen;
