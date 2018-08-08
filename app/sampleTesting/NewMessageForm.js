import React, { Component } from 'react';
 import {
   Button,
   TextInput,
   View,
   Keyboard
 } from 'react-native';

export default class NewMessageForm extends Component {
  state = { inputText: '' }

  handleChangeText = (text) => {
    this.setState({ inputText: text });
  }

  handleSave = () => {
    const { inputText } = this.state;
    const { onSave } = this.props;

    onSave(inputText);
    this.setState({ inputText: '' });
    Keyboard.dismiss()
  }

  render() {
    const { inputText } = this.state;
    return (
      <View>
        <TextInput
          value={inputText}
          testID="messageText"
          onChangeText={this.handleChangeText}
          style={{justifyContent:'center', borderWidth: 1, marginTop: 40}}
        />
        <Button
          title="Save"
          testID="saveButton"
          onPress={this.handleSave}
          disabled={this.state.inputText === ''}
        />
      </View>
    );
  }
}