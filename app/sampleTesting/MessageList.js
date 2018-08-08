import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';

const MessageList = ( props ) => (
  <FlatList 
  data={props.data}
  keyExtractor={item => item}
  renderItem={({ item }) => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
      
      <Message text={item} />
      <TouchableOpacity onPress={() => props.onDelete(item)} testID={`delete${item}`} >
        {console.log(item)}
        <Text style={{color: 'red'}} >Delete</Text>
      </TouchableOpacity>
    </View>
  )}
  ListEmptyComponent={(
    <View style={{justifyContent: 'center', alignItems: 'center'}} >
      <Text>No Message</Text>
    </View>
  )}
  />
);

const Message = ({ text }) => <Text>{text}</Text>

export default MessageList;