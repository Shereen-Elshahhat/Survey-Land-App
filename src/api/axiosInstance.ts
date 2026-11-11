import axios from "axios"
 export const axiosInstance=axios.create({
    baseURL:"https://server-node-3r5n.onrender.com/api",
})
axiosInstance.interceptors.request.use((config)=>{
    const token=localStorage.getItem('token')
    if(token){
        config.headers.Authorization=token
    }
    return config
});
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response?.status === 401){
            localStorage.clear();
            window.location.href='/auth/login'
        }

        return Promise.reject(error);
    }

)