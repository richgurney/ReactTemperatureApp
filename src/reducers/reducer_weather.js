import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // Do not do push here no mutating
      // return state.concat([ action.payload.data ]);
      return [ action.payload.data, ...state];
  }

  return state;
}

