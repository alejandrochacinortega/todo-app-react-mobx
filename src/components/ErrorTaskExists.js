import React from 'react';

class ErrorTaskExists extends React.Component {
  render() {
    console.log('this.props ', this.props.taskAlreadyExist);
    return (
      <div>
        <span style={{color: "red"}}>{this.props.taskAlreadyExist}</span>
      </div>
    )
  }
}

export default ErrorTaskExists;