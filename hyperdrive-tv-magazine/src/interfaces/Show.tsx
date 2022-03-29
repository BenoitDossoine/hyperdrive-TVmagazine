interface Show{
    id: number,
    name:string,
    show:{
      image: {
        medium: string,
      },
      medium: string,
      name:string,
      summary: string,
      type: string
    },
    airtime: string,

}

export default Show;