import { Link } from "react-router-dom";
import Props from "../interfaces/Props";

function ShowTile(props:Props){
    return (
      <div className="showContainer">
        {props.show.show.image?.medium && <img src={props.show.show.image.medium} alt="" className="showImg" />}
      <div className="showInfo">
        <div className="infoHeader">
          <h1 className="episodeTitle">{props.show.name}</h1>
          <p className="airtime">{props.show.airtime}</p>
        </div>
        <h2 className="showName">{props.show.show.name}</h2>
        <p className="showType">{props.show.show.type}</p>
        <div className="showDescription" dangerouslySetInnerHTML={{ __html: props.show.show.summary}}></div>
        <button className="tileBtn">
          <Link className="episodeLink" to={`/show/${props.show.show.id}/${props.show.season}/${props.show.number}`}>More info</Link>
        </button>
      </div>
    </div>);
}

export default ShowTile;