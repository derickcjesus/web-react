import React from 'react';

class TestProps extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="box">
        <div className="title">{this.props.title}</div>
        <div className="text">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default TestProps;
