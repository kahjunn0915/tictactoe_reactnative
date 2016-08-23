
import * as types from '../actions/tictactoeActions';

const initialState = {
  count: 0
};

export default function tictactoeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.FORWARD:
      return {
        ...state,
        count: state.count + 1
      };
    case types.BACKWARD:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}