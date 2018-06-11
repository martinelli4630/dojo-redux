import * as fromActions from '../actions/counter.action';

export interface State {
  counter: number;
}

export const initialState: State = {
  counter: 0
};

export function reducer(
  state = initialState,
  action: fromActions.CounterActions
): State {
  switch (action.type) {
    case fromActions.INCREMENT: {
      return {
        ...state,
        counter: state.counter + 1
      };
    }

    case fromActions.DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1
      };
    }

    default: {
      return state;
    }
  }
}

export const getCounter = (state: State) => state.counter;
