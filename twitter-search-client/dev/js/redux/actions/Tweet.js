export const getTweet = (data) => {
    return {
        type: 'RESULT_RECEIVED',
        payload: data
    }
};

export const addServiceError = () => {
    return {
        type: 'SERVICE_ERROR',
    }
};

export const loadTheResult = () => {
    return {
        type: 'LOADING_RESULT',
    }
};

export const parameterError = () => {
    return {
        type: 'PARAMETER_ERROR',
    }
};

