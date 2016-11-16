import React from 'react';
import {observer} from 'mobx-react';


import Header from './Header';
import AddTodo from './AddTodo';
import TodoCard from './TodoCard';
import CompletedTasks from './CompletedTasks';




@observer
class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="Todo List"/>
        <AddTodo />
        <TodoCard />
        <hr/>
        <CompletedTasks />
      </div>
    )
  }
}

export default App;