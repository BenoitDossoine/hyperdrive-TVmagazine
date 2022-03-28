import React from 'react';
import logo from './logo.svg';
import './App.css';
import './ShowList.css';
import './Show.css';


interface Props {
  show: any,
}

function App() {
  return (
    <>
      <ShowList />
    </>
  );
}



function ShowList(){
  const shows = [
    {
      "id": 2291523,
      "url": "https://www.tvmaze.com/episodes/2291523/gigantosaurus-3x31-mystery-hunters",
      "name": "Mystery Hunters",
      "season": 3,
      "number": 31,
      "airdate": "2022-03-28",
      "airtime": "09:00",
      "airstamp": "2022-03-28T13:00:00+00:00",
      "runtime": 30,
      "show": {
        "id": 40689,
        "url": "https://www.tvmaze.com/shows/40689/gigantosaurus",
        "name": "Gigantosaurus",
        "type": "Animation",
        "language": "English",
        "genres": [
          "Adventure",
          "Children",
          "Fantasy"
        ],
        "schedule": {
          "time": "09:00",
          "days": [
            "Friday"
          ]
        },
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/181/454793.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/181/454793.jpg"
        },
        "summary": "<p>Four little dinos and one BIG Gigantosaurus… learn to dare! Rocky, Bill, Tiny, and Mazu are four young dinosaurs growing up in the Cretaceous period. Life is always an adventure: new volcanoes are popping up all the time, long-necked brachiosauruses and enormous triceratopses roam free, meteor showers light up the night sky and… the big bad Gigantosaurus reigns over it all!</p><p>The mere mention of Gigantosaurus's name is enough to stir a range of conflicting emotions in the four young dinos: fear (Bill), fascination (Rocky), laughter (Tiny), and scientific interest (Mazu). Through the adventures of the young dino heroes, <b>Gigantosaurus</b> reflects the different ways 4-6-year-old children discover the world… and themselves.</p>",
      },

    }
  ];

  return(
    <div>
      {shows.map((show)=>(
        <Show key={show.id} show={show}/>
        ))}
    </div>
  );
}

function Show(props:Props){
  return (<div className="showContainer">
    <img src={props.show.show.image.medium} alt="" className="showImg" />
    <div className="showInfo">
      <h1 className="episodeTitle">{props.show.name}</h1>
      <h2 className="showName">{props.show.show.name}</h2>
      <p className="showType">{props.show.show.type}</p>
      <p className="airtime">{props.show.airtime}</p>
      <p className="showDescription">{props.show.show.summary}</p>
    </div>
  </div>);
}

export default App;
