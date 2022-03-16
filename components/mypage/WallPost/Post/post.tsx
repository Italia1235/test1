
import classes from './post.module.css'




export const Post = (props) => { 
return(
<div className={classes.post}>

    
  
        <div className={classes.avatar}>
    <img src="https://i.imgur.com/Qj1Ne3Ph.jpg" alt=""></img> 
    </div>
<div className={classes.postBody}> {props.message} </div>
  <div> Likes:{props.likesCount}</div>
   </div>
  
)
}