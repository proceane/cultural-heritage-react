export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// 등록 성공
export function receiveRegister() {
    return {
        type: REGISTER_SUCCESS
    };
}

// 등록 오류
export function registerError(payload) {
    return {
        type: REGISTER_FAILURE,
        payload
    };
}

// 사용자 등록
export function registerUser(payload) {
    return (dispatch) => {
        if(payload.creds.email.length > 0 && payload.creds.password.length > 0) {
            payload.history.push('/login');
        } else {
            dispatch(registerError('Something was wrong. Try Again'));
        }
    }
}