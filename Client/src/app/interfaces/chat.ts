export interface Chat {
    _id?: string,
    users: [{
        user_id?: string,
        firstname: string,
        lastname: string,
        login: string,
        avatar: string
    }],
    messages: [{
        author: {
            firstname: string,
            lastname: string,
            avatar: string
        },
        text: string
    }]
}
