export default function (state = null, action) {
    
    switch (action.type) {
        case 'RESULT_RECEIVED':
            console.log(action)
            state = action;
            break;
        case 'LOADING_RESULT':
            state = action;
            break;
        case 'PARAMETER_ERROR':
            state = action;
            break;
        case 'SERVICE_ERROR':
            state = action;
            break;
    }

    return state;
}
