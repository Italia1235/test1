import React from 'react'
import { connect } from 'react-redux'
import { Header } from './header'
import {AuthSetAc,AuthSetThunkCreator,LogoutThunkCreator} from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/redux-store'


export interface MapToPropsType {
    isAuth:boolean
    login:string|null
}
export interface MapDispatch {
    AuthSetAc:(userId,login,email,isAuth?)=>void
    AuthSetThunkCreator:()=>void
    LogoutThunkCreator:()=>void
}

type PropsType = MapToPropsType& MapDispatch
class HeaderContainer extends React.Component<PropsType> {
componentDidMount(){
    this.props.AuthSetThunkCreator()
}

render() {
    return <Header {...this.props}/>
}
}

const mapStateToProps = (state:AppStateType)=>
({isAuth:state.auth.isAuth,login:state.auth.login
})

export default connect (mapStateToProps,{AuthSetAc,AuthSetThunkCreator,LogoutThunkCreator}) (HeaderContainer)