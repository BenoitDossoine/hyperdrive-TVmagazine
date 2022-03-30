import { ShowListState } from './InitialState';
import { StoreState } from './../store.types';
import { createSelector } from '@reduxjs/toolkit';

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