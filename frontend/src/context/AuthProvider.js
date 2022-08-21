import React, { createContext, useEffect } from 'react';

// library
import { useReducerAsync } from 'use-reducer-async';
import axios from 'axios';

// helper 
import { notify } from '@helper/functions';

export const AuthContext = createContext()

const initialState = {user: null, loading: false}

const reducer = (state, action) => {
    switch(action.type) {
        case "LOADING": 
            return { user: null, loading: true }
        case "SUCCESS": 
            return { user: action.payload, loading: false }
        case "FAILURE":
            return { user: null, loading: false }
        case "CLEAR": 
        // for logout handler
            return initialState
        default: 
            return state
    }
}

const asyncActionHandlers = {
    SIGNIN: ({ dispatch }) => async (action) => {
        dispatch({ type: "LOADING" })
        axios.post("/user/signin", action.payload)
            .then(response => {
                if( response.data.success ) {
                    notify("success", "با موفقیت وارد شدید")
                    dispatch({ type: "SUCCESS", payload: response.data.user })
                    window.location.pathname = "/"
                }
                if( !response.data.success ) {
                    notify("warn", response.data.message)
                    dispatch({ type: "FAILURE" })
                }
            })
            .catch(() => {
                notify("error", "خطایی در برقراری ارتباط با سرور پیش آمد")
                dispatch({ type: "FAILURE" })
            })
    },

    SIGNUP: ({ dispatch }) => (action) => {
        dispatch({ type: "LOADING" })
        axios.post("/user/signup", action.payload)
            .then(response => {
                if( response.data.success ) {
                    notify("success", "اکانت شما با موفقیت ساخته شد")
                    dispatch({ type: "SUCCESS", payload: response.data.user })
                    window.location.pathname = "/"
                }
                if( !response.data.success ) {
                    notify("warn", response.data.message)
                    dispatch({ type: "FAILURE" })
                }
            })
            .catch(() => {
                notify("error", "خطایی در برقراری ارتباط با سرور پیش آمد")
                dispatch({ type: "FAILURE" })
            })
    },

    LOAD_USER: ({ dispatch }) => ()  => {
        dispatch({ type: "LOADING" })
        axios.get("/user/load")
            .then(response => {
                if(response.data.success) dispatch({ type: "SUCCESS", payload: response.data.user })
                else if(!response.data.success) dispatch({ type: "FAILURE" })
            })
            .catch(() => dispatch({ type: "FAILURE" }))
    },

    LOGOUT: ({ dispatch }) => () => {
        dispatch({ type: "LOADING" })
        axios.get("/user/logout")
            .then(() => {
                dispatch({ type: "CLEAR" })
                window.location.pathname = "/"
            })
            .catch(() => {
                notify("error", "خطایی در برقراری ارتباط با سرور پیش آمد")
                dispatch({ type: "FAILURE" })
            })
    }
}

const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducerAsync(reducer, initialState, asyncActionHandlers)

    useEffect(() => dispatch({ type: "LOAD_USER" }) , [])

    return (
        <AuthContext.Provider value={{ authData: state, dispatch }}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;