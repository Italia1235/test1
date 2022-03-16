import axios from "axios"

const instanse = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY": "26b2ff93-1b6c-416a-a42e-45366ec3f6b0"
    }
})

export const usersAPI = {
    getUsers (currentPage?,pageSize?)  {
   return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response =>response.data)
}
}

export const getProfile = (userId) => {
    return instanse.get(`profile/`+userId)
}

export const getStatus = (userId) => {
    return instanse.get(`profile/status/` +userId)
}

export const unFollowUser = (id) =>{ 
    return instanse.delete(`follow/${id}`)
}
export const FollowUser = (id) =>{ 
    return instanse.post(`follow/${id}`)
}

export const autCont = () => {
    return instanse.get(`auth/me`)

}

export const updateStatus = (status) => {
    return instanse.put(`profile/status`,{status})
}

export const loginApi = (email,password,rememberMe =false) => {
    return instanse.post(`auth/login`,{email,password,rememberMe})}

    export const logoutApi = () => {
        return instanse.delete(`auth/login`)}
    