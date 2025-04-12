import { createSlice, isFulfilled, isPending, isRejected, Slice } from '@reduxjs/toolkit';

import { authAPI } from './authentication.api';

export interface IStateAuth {
  role: string | null;
  jwtToken: string | null;
  loading: boolean;
  isAuth: boolean;
}

const initialState: IStateAuth = {
  role: null,
  jwtToken: null,
  loading: true,
  isAuth: false,
};

export const authenticationSlice: Slice<IStateAuth> = createSlice({
  name: 'authenticationSlice',
  initialState,
  reducers: {
    login: state => {
      state.isAuth = true;
    },
    logout: () => initialState,
  },
  extraReducers: builder => {
    builder.addMatcher(isPending, state => {
      state.loading = true;
    });
    builder.addMatcher(isFulfilled, state => {
      state.loading = false;
    });
    builder.addMatcher(isRejected, state => {
      state.loading = false;
    });
    builder.addMatcher(authAPI.endpoints.loginUser.matchFulfilled, (state, action) => {
      state.role = action.payload.role;
      state.jwtToken = action.payload.jwtToken;
      state.isAuth = true;
    });
    builder.addMatcher(authAPI.endpoints.getCurrentUserByToken.matchFulfilled, (state, action) => {
      state.role = action.payload.role;
      state.jwtToken = action.payload.jwtToken;
      state.isAuth = true;
    });
    builder.addMatcher(authAPI.endpoints.getCurrentUserByToken.matchRejected, state => {
      state.role = null;
      state.jwtToken = null;
      state.isAuth = false;
    });
    builder.addMatcher(authAPI.endpoints.logoutUser.matchFulfilled, state => {
      state.jwtToken = null;
      state.role = null;
      state.isAuth = false;
    });
  },
});

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice;
