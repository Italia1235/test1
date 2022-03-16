import { Post } from "./Post/post"
import React from 'react';
import styles from "./WallPosts.module.css"
import { MapProfilePageType } from "./wallPostContainer";

export const WallPosts = (props:MapProfilePageType) => {
const postElement = props.profilePage.postData.map(t =><Post message={t.post} likesCount={t.likesCount}/>)

const newPostElement = React.createRef<HTMLTextAreaElement>()
const onAddPost = () =>
{
if(newPostElement.current){
    props.addPost()}}
const onPostChange = ()=>{
    if(newPostElement.current)
props.onPostChange(newPostElement.current.value)

}

    return ( 
        <div>
<div><textarea onChange={onPostChange} 
value={props.profilePage.newPostText} ref={newPostElement} className={styles.textar} placeholder ="Write youre..."></textarea></div>
<div ><button onClick={onAddPost} className={styles.button}>Add post</button>     </div>
{postElement}
        </div>
        
    )
    }