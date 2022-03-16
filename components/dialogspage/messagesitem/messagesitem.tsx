import classes from './messagesitem.module.css'

type messagesType={
id: number
message: string

}


export const MessagesItem = (props:messagesType) => { 

return( 

    
<div className={classes.messages}>

<div>{props.message}</div>





</div>

)

}