interface Episode {
    id: number,
    name: string,
    season: number,
    number: number,
    airtime: string,
    runtime: number,
    rating: {average:number},
    summary: string,
    image: string
}

export default Episode