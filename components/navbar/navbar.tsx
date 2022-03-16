import classes from './navbar.module.css'
import {NavLink} from 'react-router-dom'
export const Navbar = () => { 

    return (

        <nav className={classes.nav}> 
     <div >  <NavLink className={classes.navItem} to="/MyPage">My page</NavLink></div> 
     <div>  <NavLink className={classes.navItem} to="/Dialogs">Messanges</NavLink></div> 
     <div>  <NavLink className={classes.navItem} to="/News">News</NavLink></div> 
     <div>  <NavLink  className={classes.navItem} to="/Friends">Friends</NavLink></div> 
     <div>  <NavLink className={classes.navItem} to="/Music">Music</NavLink></div> 
     <div>  <NavLink className={classes.navItem} to="/Users">Users</NavLink></div> 
        </nav>
    )
}