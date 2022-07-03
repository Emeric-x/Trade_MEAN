import { Country } from "./country"
import { Game } from "./game"
import { Rank } from "./rank"

export interface User {
    _id: string,
    firstname: string,
    lastname: string,
    login: string,
    password: string,
    avatar: string,
    groups?: [{
        country: Country,
        game: Game,
        rank: Rank
    }]
}
