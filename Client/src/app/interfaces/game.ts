export interface Game {
    id?: string,
    name: string,
    description: string,
    logo: string,
    ranks: [{
        name: string,
        logo: string
    }]
}
