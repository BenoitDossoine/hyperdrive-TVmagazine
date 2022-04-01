import { fireEvent, render, screen } from "@testing-library/react"
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
    
    it('Should trigger onClick callback when clicked', ()=>{
        const onClick = jest.fn();
        render(<BrowserRouter>
            <BackButton/>
        </BrowserRouter>);
        const backButton = screen.getByRole('button');
        fireEvent.click(backButton);
        expect(onClick).toHaveBeenCalledTimes(1);
    })
})