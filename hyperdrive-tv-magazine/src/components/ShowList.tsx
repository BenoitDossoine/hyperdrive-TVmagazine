import React, { useEffect } from "react";
import { showService } from '../services/ShowService';
import { useLoading } from '../hooks/Loading.hooks';
import ShowTile from "./ShowTile";
import Show from "../interfaces/Show";
import { useDispatch, useSelector } from "react-redux";
import { ShowListState } from "../Store/Shows/InitialState";
import { selectShowList, selectShowListError } from "../Store/Shows/Selectors";
import { StoreState } from "../Store/store.types";
import { fetchShowList, fetchShowListSuccess } from "../Store/Shows/Actions";


function ShowList(){
    
    const showList = useSelector<StoreState, Show[]>(
      selectShowList
    );

    const error = useSelector<StoreState, string>(
      selectShowListError
    );
    
    const dispatch = useDispatch();

    useEffect(()=>{
      if(showList.length == 0){
        showService.getAllShows()
        .then( response => dispatch(fetchShowListSuccess(response)));
      }
    }, [dispatch]);

    const renderShowList = (shows:Show[])=>{
      return shows.map((show)=>{
        return (<ShowTile key={show.id} show={show}/>);
      });
    };
      
    return(
        <div className="showList">{
            <div>
              {renderShowList(showList)}
            </div> 
        }</div>
    );
}

export {ShowList}