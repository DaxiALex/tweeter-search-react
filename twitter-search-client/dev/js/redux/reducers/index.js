import {combineReducers} from 'redux';
import SearchResults from './Search-reducer';
import ButtonReducer from './Input-value-reducer';
import SearchHistory from './Search-history-reducer'


const allReducers = combineReducers({
    ButtonReducer,
    SearchResults,
    SearchHistory


});

export default allReducers
