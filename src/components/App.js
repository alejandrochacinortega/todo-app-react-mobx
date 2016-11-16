import React from 'react';
import {observer} from 'mobx-react';


import Header from './Header';
import AddTodo from './AddTodo';
import TodoCard from './TodoCard';



@observer
class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="Todo List"/>
        <AddTodo />
        <p>Error</p>
        <TodoCard />
      </div>
    )
  }
}

export default App;