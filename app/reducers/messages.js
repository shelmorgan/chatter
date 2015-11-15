import {
  ADD_MESSAGE,
  UPDATE_MESSAGE,
  REMOVE_MESSAGE,
} from '../actions/messages';
import {union, clone} from 'lodash';
export default function messages(state = [], action) {
  switch (action.type) {
  case ADD_MESSAGE:
    if(!action.payload){
      console.error('Payload required to add a messages');
      return state;
    }
    return [...state, {details: action.payload, sender: 'shelby'}];
    break;
  case UPDATE_MESSAGE:
    if(!action.index && action.payload){
      console.error('Index and payload required to update a messages');
      return state;
    }
    if(!state[action.name]){
      console.error('messages with that name already exists');
      return state;
    }
    let newState = clone(state);
    newState[action.index] = action.payload;
    return newState;
    break;
  case REMOVE_MESSAGE:
    if(!action.index){
      console.error('Index required to delete a messages');
      return state;
    }
    if(!state[action.index]){
      console.error('messages at that index does not exist');
      return state;
    }
    let newStateTwo = clone(state);
    delete newStateTwo[action.index];
    return newStateTwo;
    break;
  default:
    return state;
  }
}
