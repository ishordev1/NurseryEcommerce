export const saveToken = ((data, next) => {
    localStorage.setItem('data', JSON.stringify(data))
    next()
})

export const isLoggedIn = (() => {
    const data = localStorage.getItem('data')
    return data ? true : false
})

export const getToken = () => {
    const data = localStorage.getItem('data')
    if (data) {
        return JSON.parse(data).token
    }
    return null
}

export const removeToken = (() => {
    localStorage.removeItem('data')
})

export const getCurrentUser = (() => {
    const data = localStorage.getItem('data')
    if (data) {
        return JSON.parse(data).user
    }
    return null
})
