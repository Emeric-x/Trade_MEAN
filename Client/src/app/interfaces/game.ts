export interface Game {
    id?: string,
    name: string,
    description: string,
    logo: string,
    ranks: [{
        id?: string,
        name: string,
        logo: string
    }]
}
