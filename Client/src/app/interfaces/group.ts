export interface Group {
    _id: string,
    topics: {
        country: {
            id: string,
            name: { type: String, required: true },
            flag: { type: String, required: true }
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
    posts: [{

    }]
}
