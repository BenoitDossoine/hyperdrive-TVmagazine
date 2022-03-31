import { useNavigate } from "react-router-dom";

function BackButton(){
    const navigate = useNavigate();
    return(
        <button className="backButton tileBtn" onClick={()=>navigate(-1)}>Go back</button>
    )
}

export default BackButton;