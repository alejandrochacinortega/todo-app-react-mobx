import React from 'react';
import {observer} from 'mobx-react';

import TodoStore from '../stores/TodoStore';
import TaskCompletedItem from './TaskCompletedItem';

@observer
class CompletedTasks extends React.Component {
  render() {
    let tasksCompleted = TodoStore.tasksCompleted;
    return (
      <div>
        <h5>{tasksCompleted.length > 0 ? tasksCompleted.length + " completed items" : ""} </h5>
        <table>
          <tbody>
          {tasksCompleted.map((task, index) => <TaskCompletedItem key={index} task={task}/> )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default CompletedTasks;