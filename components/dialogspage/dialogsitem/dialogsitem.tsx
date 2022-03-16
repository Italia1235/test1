import classes from "./dialogsitem.module.css"
import {NavLink} from 'react-router-dom'

type typeTalk = {
id: number
name:string

}



export const DialogItem = (props:typeTalk) => { 

    return(
       
       
       <div className={classes.talkPerson}>


    
    <NavLink className={classes.talkItem} to >{props.name}</NavLink>
    

  
    </div>

    
    )}