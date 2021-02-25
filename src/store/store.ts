import { createStore, combineReducers } from 'redux';
import apiDataReducer from '../reducers/apiData.reducer';

const rootReducer = combineReducers({
    dadosApi: apiDataReducer
})

const store = createStore(rootReducer);

export default store;