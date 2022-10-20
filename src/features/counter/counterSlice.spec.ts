import counterReducer, {
  AppState,
  increment,
  decrement,
  incrementByAmount,
} from './appReducer';

describe('counter reducer', () => {
  const initialState: AppState = {
    value: 3,
    status: 'idle',
    title: 'Applied Artificial Intelligence',
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' }).value).toEqual(0);
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
