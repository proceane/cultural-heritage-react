import { login, logout } from "../context/authContext";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export function receiveLogin() {
    return {
        type: LOGIN_SUCCESS
    };
}

function loginError(payload) {
    return {
        type: LOGIN_FAILURE,
        payload
    }
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST
    };
}

export function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS
    }
}


// 로그아웃
export function logoutUser() {
    return (dispatch) => {
        dispatch(requestLogout());
        logout();
        localStorage.removeItem('authenticated');
        dispatch(receiveLogout());
    };
}

// 로그인
export function loginUser(creds){
    return (dispatch) => {
        dispatch(receiveLogin());

        if (creds.email.length > 0 && creds.password.length > 0) {
            var state = login(creds.email, creds.password);
            localStorage.setItem('authenticated', true);
        } else {
            dispatch(loginError('Something was wrong. Try again'));
        }
    }
}