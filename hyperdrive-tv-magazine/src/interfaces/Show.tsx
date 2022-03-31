interface Show{
    id: number,
    name:string,
    season: number,
    number: number,
    runtime: number,
    show:{
      id:number,
      image: {
        medium: string,
      },
      medium: string,
      name:string,
      summary: string,
      type: string,
      rating: {
        average:number,
      },
    },
    airtime: string,

}

export default Show;