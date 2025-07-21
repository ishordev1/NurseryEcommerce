import { publicUrl } from "./MyAxios"

export const signup = (data) => {
    return publicUrl.post('/auth/signup', data)
        .then(response => {
            response.data;
        })
}

export const signin = (data) => {
    return publicUrl.post('/auth/signin', data)
        .then(response => {
            response.data;
        })
}
