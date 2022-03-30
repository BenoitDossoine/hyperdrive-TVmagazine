import { ShowListState } from './Shows/InitialState';
import { Store } from 'redux';


export interface StoreState extends Store{
    showList: ShowListState;
}