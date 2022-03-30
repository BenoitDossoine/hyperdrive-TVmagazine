import Show from "../../interfaces/Show"

export interface ShowListState{
    loading: boolean,
    error: string,
    list: Show[],
}

export const initialState = {
    loading: false,
    error: "",
    list: [],
}