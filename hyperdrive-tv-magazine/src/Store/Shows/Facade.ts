import { Dispatch } from "redux"
import Show from "../../interfaces/Show";

export const fetchShowList = (shows: Show[]) => {
    const results: Show[] = shows.map(
        (result: any): Show => {
            return {
                id: result.id,
                name: result.name,
                season: result.season,
                number: result.number,
                show: {
                    id: result.show.number,
                    image: {
                        medium: result.show.image.medium,
                    },
                    medium: result.show.medium,
                    name: result.show.name,
                    summary: result.show.summary,
                    type: result.show.type,
                    rating: {
                        average: result.show.rating.average,
                    },
                },
                airtime: result.airtime,
            }
        }
    )


}
