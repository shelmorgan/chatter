export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const UPDATE_MESSAGE= 'UPDATE_MESSAGE';

export function addMessage(message) {
  return {
    type: 'ADD_MESSAGE',
    payload: message
  };
}
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
