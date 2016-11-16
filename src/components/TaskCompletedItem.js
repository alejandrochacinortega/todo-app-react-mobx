import React from 'react';
import {observer} from 'mobx-react';

import TodoStore from '../stores/TodoStore';


@observer
class TaskCompletedItem extends React.Component {
  unCheckTask() {
    let task = this.props.task;
    TodoStore.toggleTask(task)
  }

  render() {
    let taskStyles = {
      "textDecoration": "line-through",
      "cursor": "pointer"
    };

    return (
      <tr>
        <td>
          <input type="checkbox"
                 checked="{this.props.task.isDone}"
                 onChange={this.unCheckTask.bind(this)}/>
        </td>
        <td style={taskStyles} onClick={this.unCheckTask.bind(this)}>{this.props.task.name}</td>
      </tr>
    )
  }
}

export default TaskCompletedItem;