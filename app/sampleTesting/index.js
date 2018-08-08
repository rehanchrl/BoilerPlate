import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import NewMessageForm from './NewMessageForm';
import MessageList from './MessageList';

export default class App extends Component {
	state = { messages: [] };

	handleSave = (newMessage) => {
		const { messages } = this.state;
    this.setState({ messages: [newMessage, ...messages] });
	}

	handleDelete = (Message) => {
		const { messages } = this.state;
		const newArray = messages.filter(messages => messages !== Message)
		this.setState({ messages: newArray });
	}
	
	render() {
		const { messages } = this.state;
    return (
			<View>
				<NewMessageForm onSave={this.handleSave} />
				<MessageList data={messages} onDelete={this.handleDelete.bind(this)} />
			</View>
    );
  }
}
