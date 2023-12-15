import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
  loading: false,
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // User Login
    userLoginStart: (state) => {
      state.loading = true;
    },
    userLoginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    userLoginFailure: (state, action) => {
      state.error = action.payload;
      state.user = null;
      state.loading = false;
    },

    // Update user profile
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    updateUserFilure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Change user password
    changeUserPasswordStart: (state) => {
      state.loading = true;
    },
    changeUserPasswordSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    changeUserPasswordFilure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // User log out
    userLogoutStart: (state) => {
      state.loading = true;
    },
    userLogoutSuccess: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
    userLogoutFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Delete user
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Update user address
    updateUserAddressStart: (state) => {
      state.loading = true;
    },
    updateUserAddressSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    updateUserAddressFilure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // delete user address
    deleteUserAddressStart: (state) => {
      state.addressLoading = true;
    },
    deleteUserAddressSuccess: (state, action) => {
      state.Filure = false;
      // state.successMessage = action.payload.successMessage;
      state.user = action.payload;
    },
    deleteUserAddressFilure: (state, action) => {
      state.addressLoading = false;
      state.error = action.payload;
    },

    // Clear errors
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

// Destructure user reducer methods
export const {
  userLoginStart,
  userLoginSuccess,
  userLoginFailure,

  updateUserStart,
  updateUserSuccess,
  updateUserFilure,

  changeUserPasswordStart,
  changeUserPasswordSuccess,
  changeUserPasswordFilure,

  userLogoutStart,
  userLogoutSuccess,
  userLogoutFailure,

  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,

  updateUserAddressStart,
  updateUserAddressSuccess,
  updateUserAddressFilure,

  deleteUserAddressStart,
  deleteUserAddressSuccess,
  deleteUserAddressFilure,

  clearErrors,
} = userReducer.actions;

// export userSlice
export default userReducer.reducer;
