import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import sliceReducer from '../features/counter/appReducer';

export const store = configureStore({
  reducer: {
    app: sliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
