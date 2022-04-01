import { useSearchParams } from 'react-router-dom';
import { ShowListState } from './InitialState';
import { StoreState } from './../store.types';
import { createSelector } from '@reduxjs/toolkit';
import Filter from '../../interfaces/Filter';
import Fuse from 'fuse.js';

export const showListStateSelector = (
    state: StoreState
): ShowListState => state.showList;

export const selectShowList = createSelector(
    showListStateSelector,
    (state: ShowListState) => state?.list || []
);

export const selectShowListError = createSelector(
    showListStateSelector,
    (state:ShowListState) => state?.error
);


export const selectFilteredShowList = createSelector(
    [(store:StoreState) => store.showList.list,
    (state,searchParameters:Filter)=>searchParameters],
    (list,searchParameters) => {
        let filteredList = list;
        const searchOptions = {
            includeScore: true,
            keys: ['name', 'show.name']
        }

        const fuse = new Fuse(filteredList,searchOptions);
        const result = fuse.search(searchParameters.search ?? "");
        filteredList = result.map(result => result.item);

            
        if(searchParameters.filter){
            if(searchParameters.filter == 'alphabet'){
                filteredList = filteredList.sort((a:any,b:any)=> a.name.localeCompare(b.name));
            } else if (searchParameters.filter == 'length'){
                filteredList = filteredList.sort((a:any,b:any)=> a.airtime.localeCompare(b.airtime));
            } else {
                filteredList = filteredList;
            }
        }
        return filteredList;
    }
);