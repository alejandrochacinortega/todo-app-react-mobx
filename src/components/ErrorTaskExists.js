import React from 'react';

class ErrorTaskExists extends React.Component {
  render() {
    return (
      <div>
        <span style={{color: "red"}}>{this.props.taskAlreadyExist}</span>
      </div>
    )
  }
}

export default ErrorTaskExists;