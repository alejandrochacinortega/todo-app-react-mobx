import {observable, action} from 'mobx';
import TodoModel from '../models/todoModel';
import _ from 'lodash';


var TODOS = [
  {
    'name'     : 'buy food',
    'isDone'   : false,
    'isVisible': true
  },
  {
    'name'     : 'buy milk',
    'isDone'   : false,
    'isVisible': true
  }
];

var TASKCOMPLETED = [
  {
    'name'     : 'omar',
    'isDone'   : true,
    'isVisible': true
  },
  {
    'name'     : 'sigma',
    'isDone'   : true,
    'isVisible': true
  }
];

class TodoStore {

  @observable todos          = [];
  @observable tasksCompleted = [];

  constructor() {
    TODOS.map((todo => this.todos.push(new TodoModel(todo))));
    TASKCOMPLETED.map((todo => this.tasksCompleted.push(new TodoModel(todo))))
  }

  @action
  addTask(task) {
    if (task.length < 1) {
      throw new Error("task is empty")
    }
    _.find(this.todos, function (todo) {
      if (todo.name == task) {
        throw new Error("task already exist")
      }
    });

    this.todos.push(new TodoModel({
      name     : task,
      isDone   : false,
      isVisible: true
    }))
  }

  @action
  toggleTask(task) {
    task.isDone = !task.isDone;
    if (task.isDone) {
      _.remove(this.todos, t => t.name == task.name);
      this.tasksCompleted.push(task);
    }
    else {
      _.remove(this.tasksCompleted, t => t.name == task.name)
      this.todos.push(task);
    }
  }
}

const todosStore = new TodoStore();

export default todosStore;

