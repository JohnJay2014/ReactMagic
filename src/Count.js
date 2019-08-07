
import React, { Component } from 'react';

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 15 };
  }

  //脱了裤子放屁...
  componentWillMount() {
    this.update(this.props.count);
  }

  update(param) {
    this.setState({
      count: param
    })
  }
  render() {
    return (
      <span class="badge bg-primary">{this.state.count}</span>
    );
  }
}

export default Count;
