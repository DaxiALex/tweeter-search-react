export function addSearchHistory(data) {
    return (dispatch) =>
        dispatch({type: 'SEARCH_HISTORY', payload: data}
        );
}