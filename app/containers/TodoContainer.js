import React, {Component} from 'react';
import { View } from 'react-native'
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList'
import { Container, Header, Content, Form, Item, Input, Footer } from 'native-base';

export default class TodoContainer extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      task: []
    }

    this.addTodo = this.addTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo = item => {
    const { task } = this.state;
    this.setState({ task: [item, ...task] });
  }

  completeTodo = item => {
    
  }
  
  removeTodo = item => {
    const { task } = this.state;
		const newArray = task.filter(task => task !== item)
		this.setState({ task: newArray });
  }

  render() {
    const { task } = this.state;
    return (
      // <View>
      //   <AddTask onSave={this.addTodo} />
      //   <TaskList data={task} onDelete={this.removeTodo} />
      // </View>
      <Container>
        <Header />
        <Content>
          <TaskList data={task} onDelete={this.removeTodo} />
        </Content>
          <AddTask onSave={this.addTodo} />
      </Container>
    );
  }
}