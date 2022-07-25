export interface User {
    _id?: string,
    firstname: string,
    lastname: string,
    login: string,
    password: string,
    avatar: string,
    groups?: [{
        group_id: string,
        topics: {
            country: {
                name: string,
                flag: string
            },
            game: {
                name: string
                logo: string
            },
            rank: {
                name: string
                logo: string
            }
        }
    }],
    match?: string
}
