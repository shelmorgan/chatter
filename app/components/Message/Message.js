import React, {Component, PropTypes} from 'react';
import './Message.scss';

class Message extends Component {
  constructor(props){
    super(props);
  }

  static propTypes = {
    sender: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    onRemoveClick: PropTypes.func
  }; //Putting this within the Message class makes it apply to everything
    //Could also do same thing w/ Message.propTypes after but thats janky

//REMEBER THIS:
  //Upper case 'p' in PropTypes is a part of React
  //Lower case 'p' in propTypes defines the type of properties that will be accepted by the component

  render() {
    return (
      <div className="Message">
        <li>
        <p className="messageSender">{ this.props.sender }</p>
        <p className="messageDetails">{ this.props.details }</p>
        <button onClick={ this.props.onRemoveClick }>delete</button>
        </li>
      </div>
    );
  }
}

export default Message;
