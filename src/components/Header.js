import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <h4>{this.props.title}</h4>
    )
  }
}

export default Header;