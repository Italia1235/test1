import React from 'react'
import { MyPage } from './mypage';
import { connect } from "react-redux";
import { ProfilePageType, getProfileThunkCreator, getStatusThunk, setUserMyPageAC,updateStatusThunk } from '../../redux/Profile-reducer';
import {  RouteComponentProps, withRouter } from 'react-router';
import { RedirectHOC } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

export type MapProfilePageType =  MapStateToPropsType & MapDispatchPropsType
type MapStateToPropsType ={
        profile:ProfilePageType
        isAuth:boolean
    }
type MapDispatchPropsType ={
        setUserMyPageAC:(profile)=>void
        getProfileThunkCreator:(userId)=>void
        getStatusThunk:(userId)=>void
    }
type PathParamsType = {
    userId:string
}

type CommonPropsType =RouteComponentProps<PathParamsType>&MapProfilePageType


class MyPageContainer extends React.Component<CommonPropsType,{}>{
componentDidMount(){
    let userId = this.props.match.params.userId
    if(!userId){
        userId="20420"
    }
    this.props.getProfileThunkCreator(userId)
    this.props.getStatusThunk(userId)
    }

    render(){
      
                   return <MyPage  {...this.props}/>    }
}



const mapStateToProps = (state)=>({
    profile:state.profilePage.profile,
    isAuth:state.auth.isAuth,
    status:state.profilePage.status})

    



 export default  compose<React.ComponentType>
 (connect(mapStateToProps,{setUserMyPageAC,getProfileThunkCreator,getStatusThunk,updateStatusThunk}),
 withRouter,RedirectHOC)(MyPageContainer)