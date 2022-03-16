import { Preloader } from '../../../common/Preloader/Preloader'
import classes from './profileinfo.module.css'



export const ProfileInfo = (props:any) => { 
if(!props.profile){
   return <Preloader/>
}

return(
<div className={classes.profile}>
<div> <img  className ={classes.photo} src={props.profile.photos.large} alt="" /></div>
<div className={classes.infoMe} ><p>{props.profile.aboutMe}</p></div>
   </div>
  
)
}