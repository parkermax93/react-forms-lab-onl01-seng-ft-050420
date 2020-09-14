import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: ''
  };
  
  handleInputChange = (e) => {
    this.setState( {message: e.target.value})
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleInputChange}/>
        <p>Remaining Characters: {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;