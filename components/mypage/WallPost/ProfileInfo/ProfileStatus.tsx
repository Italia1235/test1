import { ChangeEvent, useEffect, useState } from "react"




export const ProfileStatus =({status,updateStatusThunk}) =>{

    const [profileStatus,changeStatus] = useState<string>(status)
    const [editMode,changeEditMode] = useState<boolean>(false)

    useEffect(() => {
        changeStatus(status);
    }, [status]);


const activateEditMode = () =>{ 
    changeEditMode(true)
}

const deactivateEditMode = () =>{ 
    updateStatusThunk(profileStatus)
    changeEditMode(false)
}

const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeStatus(e.currentTarget.value)
}

    return(
        <div style= {{padding:"10px"}}>
{editMode?  

<span> <input onChange={onChangeHandler} value ={profileStatus} autoFocus={true} onBlur={deactivateEditMode}/></span>:
<span  onDoubleClick = {activateEditMode}>{profileStatus}</span>
}


     </div>
        )    }