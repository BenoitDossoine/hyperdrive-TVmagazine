import { createAction } from "@reduxjs/toolkit";
import Filter from "../../interfaces/Filter";
import Show from "../../interfaces/Show";

export const fetchShowList = createAction<Show[]>('@@SHOWLIST/FETCH');
export const fetchShowListSuccess = createAction<Show[]>('@@SHOWLIST/FETCHSUCCESS');
export const fetchShowListError = createAction<{results:Show[];}>('@@SHOWLIST/FETCHERROR');
export const filterList = createAction<Filter>('@@SHOWLIST/FILTERLIST');
