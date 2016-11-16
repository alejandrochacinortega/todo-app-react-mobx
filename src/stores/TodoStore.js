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
    'isDone'   : true,
    'isVisible': true
  }
];

class TodoStore {

  @observable todos = [];

  constructor() {
    TODOS.map((todo => this.todos.push(new TodoModel(todo))))
  }

  @action
  toggleTask(task) {
    _.find(this.todos, function(t) {
      if (t.name == task.name) {
        t.isDone = !t.isDone
      }
    })
  }

  @action
  addTask(task) {
    this.todos.push(new TodoModel({
      name: task,
      isDone: false,
      isVisible: true
    }))
  }

}

const todosStore = new TodoStore();

export default todosStore;

