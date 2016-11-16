import React from 'react';
import {observer} from 'mobx-react';
import TodoStore from '../stores/TodoStore';

import TodoCardItem from './TodoCardItem';



@observer
class TodoCard extends React.Component {

  render() {
    let todos = TodoStore.todos;

    return (
      <div>
        <table>
          <tbody>
          {todos.map((todo, index) => <TodoCardItem key={index} todo={todo} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TodoCard;