import { ADDRESS_SUGESTION } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case ADDRESS_SUGESTION:
      return action.payload;
    default:
      return state;
  }
};
