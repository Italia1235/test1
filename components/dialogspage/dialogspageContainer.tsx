import { DialogsPage } from './dialogspage';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { DialogsPageType, newMessageBodyAC,sendMessageAC } from '../../redux/Dialogs-reducer';
import { RedirectHOC } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import React from 'react';



type MapStateToPropsType ={
    dialogsPage:DialogsPageType
    auth:boolean
}

export let Dialog

export type DialogsPropsType =  MapStateToPropsType & MapDispatchPropsType
type MapDispatchPropsType ={
    onChangeValueMessage:(text:string)=>void
    addMessage: ()=>void
}

 const mapStateToProps = (state:AppStateType) => { 
return{
    dialogsPage:state.dialogsPage,
    auth:state.auth.isAuth
}
}

export default Dialog = compose <React.ComponentType> (connect(mapStateToProps,{ 
    onChangeValueMessage:newMessageBodyAC,
    addMessage:sendMessageAC},RedirectHOC(DialogsPage)))

