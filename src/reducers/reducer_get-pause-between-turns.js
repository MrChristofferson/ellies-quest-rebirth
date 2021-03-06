import * as types from '../constants/action_types';
import { List, Map, fromJS } from 'immutable';

const DEF = fromJS([false]);

export default function(state = DEF, action) {
  switch (action.type) {
    case types.SET_PAUSE_BETWEEN_TURNS: {
      return state.setIn([0], action.payload);
    }
    default: {
      return state;
    }
  }
}
