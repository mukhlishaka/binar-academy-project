import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toast: {
        message: "",
        type: "danger",
    },
    isLoading: false,
    profile: {},
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToast: (state, action) => {
            state.toast = { ...action.payload };
        },

        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },

        setProfile: (state, action) => {
            state.profile = { ...action.payload };
        },
    },
});


export const { setToast, setLoading, setProfile } = userSlice.actions;

export const showErrorToast = (message) => (dispatch) => {
    dispatch(
        setToast({
            message,
            type: "danger",
        })
    );
    setTimeout(() => {
        dispatch(
            setToast({
                message: "",
                type: "danger",
            })
        );
    }, 3000);
};

export const showSuccessAlert = (message) => (dispatch) => {
    dispatch(
        setToast({
            message,
            type: "success",
        })
    );
    setTimeout(() => {
        dispatch(
            setToast({
                message: "",
                type: "success",
            })
        );
    }, 3000);
};

export default userSlice.reducer;
