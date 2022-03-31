import React, { useEffect } from "react";
import { showService } from '../services/ShowService';
import { useLoading } from '../hooks/Loading.hooks';
import ShowTile from "./ShowTile";
import Show from "../interfaces/Show";
import { useDispatch, useSelector } from "react-redux";
import { ShowListState } from "../Store/Shows/InitialState";
import { selectFilteredShowList, selectShowList, selectShowListError } from "../Store/Shows/Selectors";
import { StoreState } from "../Store/store.types";
import { fetchShowList, fetchShowListSuccess, filterList } from "../Store/Shows/Actions";
import { useSearchParams } from "react-router-dom";
import Filter from "../interfaces/Filter";


function ShowList(){
    
    let [searchParams, setSearchParams] = useSearchParams();
    let search = searchParams.get("search");
    let filter = searchParams.get("filter");
  
    const showList = useSelector<StoreState, Show[]>(
      selectShowList
    );

    const filteredShowList = useSelector<StoreState, Show[]>(
      (state)=>selectFilteredShowList(state,{search,filter})
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
        <div className="showList">
            <div>
              {(search || filter)?
              renderShowList(filteredShowList):     
              renderShowList(showList)}
            </div> 
        </div>
    );
}

export {ShowList}