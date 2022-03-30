import { useSelector } from 'react-redux';
import { ShowListState } from './Shows/InitialState';
import { ShowListReducer } from './Shows/Reducer';
import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import thunk from 'redux-thunk';
import { TypedUseSelectorHook } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers<Reducer>({
    showList: ShowListReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export const useTypedSelector: TypedUseSelectorHook<ShowListState> = useSelector;

