import { CURRENT_ADDRESS } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case CURRENT_ADDRESS:
      return action.payload;
    default:
      return state;
  }
};
