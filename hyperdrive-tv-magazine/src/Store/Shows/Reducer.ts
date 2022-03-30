import { ShowListState, initialState } from './InitialState';
import { createReducer } from "@reduxjs/toolkit";
import * as ACTIONS from './Actions'

export const ShowListReducer = createReducer<ShowListState>(
    initialState,
    (builder)=>{
        builder.addCase(ACTIONS.fetchShowList, (state):ShowListState =>{
            return{
                ...state,
                loading: true,
                error: "error",
                list: [],
            };
        });

        builder.addCase(ACTIONS.fetchShowListSuccess, (state,action):ShowListState =>{
            return{
                ...state,
                loading: false,
                error: "",
                list: action.payload,
            };
        });
    }
);