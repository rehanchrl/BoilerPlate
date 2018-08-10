import React, { PureComponent } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

export default class TaskList extends PureComponent {
  
  render() {
    return (
      <FlatList 
      data={this.props.data}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
          <Text>{item}</Text>
          <TouchableOpacity onPress={() => this.props.onDelete(item)} testID={`delete${item}`} >
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
  }
}