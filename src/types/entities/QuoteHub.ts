export type AccessToken = {
    token: string
}

export type Categories = {
    id: string
    name: string
}

export type UserInfo = {
    id: string
    name: string
    username: string
    email: string
    type: string
    categories: Categories[]
}