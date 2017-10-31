
export default function( state = [], action ){
    switch (action.type) {
        case 'SEARCH_HISTORY':
            if ( state.indexOf( action.payload ) !== -1 ) {
                return state;
            }
            if ( state.length < 5 ) {
                return [...state, action.payload]
            }
            return state.filter( ( s, index ) => index !== 0 ).concat( action.payload );
        default:
            return state;
    }
}