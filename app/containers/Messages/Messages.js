import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Message from '../../components/Message/Message'
import MessageInput from '../../components/MessageInput/MessageInput'
import * as Actions from '../../actions/messages';
import './Messages.scss';

//Messages is an object
//The object Messages has methods
//constructor, sendMessage, and render are the methods of Messages
class Messages extends Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);

  }

  sendMessage(messageContent) {
    console.log('this message is: ' + messageContent);
  }

  render() {
    let messagesData = [
      {
        sender: 'scott',
        details: 'hello'
      },
      {
        sender: 'shelby',
        details: 'hey'
      }

    ]
    let messagesList = messagesData.map( (message, i) => {

      return <Message key={ i } sender={ message.sender } details={ message.details } />

    })


    //***&-HEADER + &-List
    // This could also be replaced with adding a header class instead of doing the &
    //(see matching comment in Messages.scss)
    return (
      <div className="Messages">
        <div className="Messages-Header">
          <h1>Messages</h1>
        </div>
        <div className="Messages-List">
          <ul>
            {messagesList}
          </ul>
          <MessageInput onMessageSendClick={ this.sendMessage } />
        </div>
      </div>
    );
  }
}
//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    router: state.router
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
