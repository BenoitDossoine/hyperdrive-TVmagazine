import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import BackButton from "./components/BackButton"

describe('<BackButton/>', ()=>{
    it('Should be a backbutton', ()=>{
        render(<BrowserRouter>
            <BackButton/>
        </BrowserRouter>);
        const backButton = screen.getByRole('button');
        expect(backButton).toBeInTheDocument();
    });
})