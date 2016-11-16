import {action, observable, computer} from 'mobx';

class TodoModel {
  @observable name;
  @observable isDone;
  @observable isVisible;

  constructor (todo) {
    this.name = todo.name;
    this.isDone = todo.isDone;
    this.isVisible = todo.isVisible
  }
}

export default TodoModel;
