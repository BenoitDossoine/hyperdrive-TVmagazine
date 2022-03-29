class ShowService {
    private baseUrl = 'https://api.tvmaze.com';

    public async getAllShows(){
        const response = await fetch(`${this.baseUrl}/schedule`);
        return response.json();
    }

    public async getEpisode(show:string,season:string,episode:string){
        const response = await fetch(`${this.baseUrl}/shows/${show}/episodebynumber?season=${season}&number=${episode}`);
        return response.json();
    }
}

export const showService = new ShowService();