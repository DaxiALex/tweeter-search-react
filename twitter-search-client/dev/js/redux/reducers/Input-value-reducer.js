export default function (state = null, action) {
    switch (action.type) {
        case 'CURRENT_INPUT_VALUE':

            return action.payload;
            break;
    }
    return state;
}
