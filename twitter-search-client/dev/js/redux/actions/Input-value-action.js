export function valueChanged(data) {
    return (dispatch) =>
        dispatch({type: 'CURRENT_INPUT_VALUE', payload: data}
        );
}