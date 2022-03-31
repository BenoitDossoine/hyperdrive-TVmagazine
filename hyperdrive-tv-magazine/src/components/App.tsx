import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DetailPage from './Detailpage';
import Homepage from './Homepage';
import Header from './Header';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/show/:showId/:season/:episodeNumber" element={<DetailPage/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
