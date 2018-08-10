import React, { PureComponent } from 'react';
 import {
   TextInput,
   View,
   Keyboard
 } from 'react-native';
 import {Form, Item, Input, Button, Text, Right} from 'native-base'

export default class AddTask extends PureComponent {
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
        {/* <TextInput
          value={inputText}
          testID="messageText"
          onChangeText={this.handleChangeText}
          style={{justifyContent:'center', borderWidth: 1, marginTop: 40}}
        /> */}
        <Form>
          <Item >
            <Input 
            value={inputText}
            testID="messageText"
            onChangeText={this.handleChangeText}
            style={{ borderWidth: 0 }} />
          </Item>
        </Form>
        <Right>
          
        </Right>
        <Button
          testID="saveButton"
          onPress={this.handleSave}
          disabled={this.state.inputText === ''}
        >
        <Text>Save</Text>
        </Button>
      </View>
    );
  }
}