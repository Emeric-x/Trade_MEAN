import { Country } from "./country"
import { Game } from "./game"
import { Rank } from "./rank"

export interface Group {
    country: Country,
    game: Game,
    rank: Rank
}
