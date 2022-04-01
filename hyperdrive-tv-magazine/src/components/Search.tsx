import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Search(){

  let [searchParams, setSearchParams] = useSearchParams();

  function addSearchQuery(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let search = formData.get("search") as string;
    const params = {filter: searchParams.get("filter") || '',
    search: `${search}`};
    setSearchParams(params);
  }

  return(
    <form className="searchForm" onSubmit={addSearchQuery}>
      <input name="search" type="text" placeholder="Search" autoComplete="off" />
    </form>
  );
}

export {Search};