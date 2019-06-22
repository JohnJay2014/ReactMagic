
import React, { Component } from 'react';

class Count extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 15};
    }

    render() {
        return (
          <span class="badge bg-primary">{this.state.count}</span>
        );
    }
}

export default Count;
