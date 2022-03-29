import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DetailPage from './Detailpage';
import Homepage from './Homepage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/show/:showId/:season/:episodeNumber" element={<DetailPage/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
