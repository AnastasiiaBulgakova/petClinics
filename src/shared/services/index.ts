import { store } from './store/store';
import { authAPI } from './api/auth/authentication.api';
import { authenticationSlice } from './api/auth/authenticationSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { authenticationSlice, authAPI };
