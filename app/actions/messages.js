export const ADD_MESSAGES = 'ADD_MESSAGES';
export const REMOVE_MESSAGES = 'REMOVE_MESSAGES';
export const UPDATE_MESSAGES= 'UPDATE_MESSAGES';

export function addMessage(message) {
  return {
    type: 'ADD_MESSAGES',
    payload: message
  };
}
export function removeMessage(message) {
  return {
    type: 'REMOVE_MESSAGES',
    payload: message
  };
}
export function updateMessage(message) {
  return {
    type: 'UPDATE_MESSAGES',
    payload: message
  };
}
