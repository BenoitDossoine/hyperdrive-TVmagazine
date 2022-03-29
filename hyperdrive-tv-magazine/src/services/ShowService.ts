class ShowService {
    private baseUrl = 'https://api.tvmaze.com/schedule';

    public async getAllShows(){
        const response = await fetch(this.baseUrl);
        return response.json();
    }
}

export const showService = new ShowService();