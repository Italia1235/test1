import { Dispatch } from 'redux';
import { getProfile, getStatus, updateStatus } from '../api/api';

export type postType = {
    id:number,
    post:string,
    likesCount:number
}
const initialState ={
        postData : [
            {id:1, post: "I learn React! ", likesCount:12},
            {id:2, post: "I like my mother :3",likesCount:1 }, ],
            newPostText: "",
            profile:null,
            status:""
}

export const profileReducer = (state = initialState,action:ActionsTypes):ProfilePageType=>{ 
    switch(action.type)
    {
    case "ADD-POST":  
   return {...state,postData:[...state.postData,
    { id:5,  post: state.newPostText, likesCount:0}
],newPostText:""}
 
      case "UPDATE-NEW-POST":  

    return {...state,newPostText:action.newText}

    case "SET-USER-PROFILE":
    
            return{...state,profile:action.profile}

    case 'SET-STATUS' :
        return {...state,status:action.status}

default: return  state 

    }
}
type AddPostActionType = ReturnType <typeof AddPostActionCreator>
type ChangeNewTextType = ReturnType <typeof changeNewTextAC>
type setUserMyPageTtype = ReturnType <typeof setUserMyPageAC>
type setStatusType = ReturnType <typeof setStatusAC>

export type ActionsTypes = AddPostActionType|ChangeNewTextType|setUserMyPageTtype|
setStatusType


export type ProfilePageType = { 
    postData: postType[];
    newPostText: string
    profile:any
    status:string
}
export const setStatusAC = (status) => ({type:"SET-STATUS",status}as const)
export const AddPostActionCreator = () => ( {type:"ADD-POST"}) as const
export const changeNewTextAC = (newText:string)=>({type:"UPDATE-NEW-POST",newText }) as const
export const setUserMyPageAC= (profile)=>(
    {type:"SET-USER-PROFILE",profile}) as const
export const getProfileThunkCreator = (userId) => { 
    return (dispatch:Dispatch) =>{
        getProfile(userId)
        .then(res =>{
           dispatch(setUserMyPageAC(res.data))
                    })
    }
}
export const getStatusThunk = (userId) => (dispatch:Dispatch) =>{
getStatus(userId).then(res => dispatch(setStatusAC(res.data)))
}
export const updateStatusThunk = (status) => (dispatch:Dispatch) =>{
    updateStatus(status).then(res => { if (res.data.resultCode ===0)
        {dispatch(setStatusAC(status))}})
    }