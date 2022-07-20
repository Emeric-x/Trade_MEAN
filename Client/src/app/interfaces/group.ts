export interface Group {
    _id?: string,
    topics: {
        country: {
            id: string,
            name: string,
            flag: string
        },
        game: {
            id: string,
            name: string,
            description: string,
            logo: string
        },
        rank: {
            name: string,
            logo: string
        }
    },
    posts?: [{
        _id: string,
        author: {
            author_id: string,
            firstname: string,
            lastname: string,
            login: string,
            avatar: string
        },
        text: string
    }]
}
