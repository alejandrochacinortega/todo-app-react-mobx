import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

import TodoStore from '../stores/TodoStore';


@observer
class AddTodo extends React.Component {

  @observable newTask;

  onChange(event) {
    this.newTask = event.target.value;

  }

  async addTask() {
    try {
      await TodoStore.addTask(this.newTask);
      this.newTask = "";
    }
    catch (error) {
      console.log('error ', error);
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Add todo"
          value={this.newTask}
          onChange={this.onChange.bind(this)}/>
        <button onClick={this.addTask.bind(this)}>Add new task</button>
      </div>
    )
  }
}

export default AddTodo;