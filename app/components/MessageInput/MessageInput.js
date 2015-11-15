import React, {Component, PropTypes} from 'react';
import './MessageInput.scss';

class MessageInput extends Component {
  constructor(props){
    super(props);
    this.handleMessageInput = this.handleMessageInput.bind(this);
    this.sendNewMessage = this.sendNewMessage.bind(this);
  }

  static propTypes = {
    onMessageSendClick: PropTypes.func.isRequired
  };

  sendNewMessage() {
    if(this.props && this.props.onMessageSendClick) {
      this.props.onMessageSendClick(this.messageText);
    }
  }
  handleMessageInput(event) {
    this.messageText = event.target.value;
  }

  render() {
    return (
      <div className="MessageInput">
        <input placeholder="Message" onChange={this.handleMessageInput}></input>
        <button onClick={this.sendNewMessage}>send</button>
      </div>
    );
  }
}

export default MessageInput
