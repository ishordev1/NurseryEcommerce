export const publicUrl = myAxios.create({
    baseURL: 'http://localhost:8080'
})

export const privateUrl = myAxios.create({
    baseURL: 'http://localhost:8080'
})

privateUrl.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, Promise.reject(error => console.log('Error in request interceptor:', error)))