import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        value={this.state.value}
        onChange={this.handleChange}/>
        <div>Remaining characters: {this.props.maxChars - this.state.value.length} </div>
      </div>
    );
  }
}

export default TwitterMessage;
