import classes from './mypage.module.css'
import { ProfileInfo } from './WallPost/ProfileInfo/profileinfo'
import { ProfileStatus } from './WallPost/ProfileInfo/ProfileStatus';
import {WallPostsContainer } from './WallPost/wallPostContainer';


export const MyPage = (props) => {
    return (
<div className={classes.mypage}>
<ProfileInfo profile={props.profile} />
<ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk}/>
<WallPostsContainer />

        </div>)
}