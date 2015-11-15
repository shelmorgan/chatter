export const ATTEMPT_ADD_MESSAGE = 'ATTEMPT_ADD_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const RECEIVE_ADD_MESSAGE = 'RECEIVE_ADD_MESSAGE';
export const ATTEMPT_LOAD_MESSAGES = 'ATTEMPT_LOAD_MESSAGES';
export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const RECEIVE_LOAD_MESSAGES = 'RECEIVE_LOAD_MESSAGES';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const UPDATE_MESSAGE= 'UPDATE_MESSAGE';
import {toArray} from 'lodash';
import Firebase from "firebase";
let messagesRef = new Firebase('https://pschatterone.firebaseio.com/messages'); // messagesRef now refers to the firebase database location

//Add Message
export function attemptAddMessage(message) {
  return {
    type: 'ATTEMPT_ADD_MESSAGE',
    payload: message
  };
}
export function addMessage(messageContent) {
  return (dispatch, getState) => {
    dispatch(attemptAddMessage(messageContent));
    messagesRef.push({details:messageContent, sender:'shelby'}, () => {
      dispatch(receiveAddMessage(messageContent));
    });
  }
}
export function receiveAddMessage(message) {
  return {
    type: 'RECEIVE_ADD_MESSAGE',
    payload: message
  };
}

//Load Messages
export function attemptLoadMessages() {
  return {
    type: 'ATTEMPT_LOAD_MESSAGES',
  };
}
export function loadMessages() {
  return (dispatch, getState) => {
    dispatch(attemptLoadMessages());
    messagesRef.on('value', (messagesSnap) => {
      console.log('messages loaded from firebase ', messagesSnap.val());
      let data = toArray(messagesSnap.val()); //data === data from firebase
      dispatch(receiveLoadMessages(data));

    });

  }
}
export function receiveLoadMessages(messages) { //Messages is plural bc working on behalf of whole state
  return {
    type: 'RECEIVE_LOAD_MESSAGES',
    payload: messages
  };
}

//Remove Message
export function removeMessage(message) {
  return {
    type: 'REMOVE_MESSAGE',
    payload: message
  };
}
export function updateMessage(message) {
  return {
    type: 'UPDATE_MESSAGE',
    payload: message
  };
}
