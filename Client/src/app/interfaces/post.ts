export interface Post {
    _id?: string,
    author: {
        author_id: string,
        firstname: string,
        lastname: string,
        login: string,
        avatar: string
    },
    text: string
}
