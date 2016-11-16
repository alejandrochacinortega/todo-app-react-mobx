import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

import TodoStore from '../stores/TodoStore';
import ErrorTaskExists from './ErrorTaskExists';



@observer
class AddTodo extends React.Component {

  @observable newTask;
  @observable taskAlreadyExist;

  onChange(event) {
    this.newTask = event.target.value;

  }

  async addTask() {
    try {
      await TodoStore.addTask(this.newTask);
      this.newTask = "";
      this.taskAlreadyExist = "";
    }
    catch (error) {
      switch(error.message) {
        case "task is empty":
          this.taskAlreadyExist = error.message;
          break;
        case "task already exist":
          this.taskAlreadyExist = error.message - "Please add a new task";
          break;
        default:
        this.taskAlreadyExist = error.message;
      }
      this.newTask = undefined;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={this.newTask}
          onChange={this.onChange.bind(this)}/>
        <button onClick={this.addTask.bind(this)}>Add new task</button>
        <ErrorTaskExists taskAlreadyExist={this.taskAlreadyExist}></ErrorTaskExists>
      </div>
    )
  }
}

export default AddTodo;