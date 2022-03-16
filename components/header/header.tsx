import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

export const Header = (props: any) => {
  return (
    <header className={styles.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/RegisteredTM.svg/1200px-RegisteredTM.svg.png"
        alt=""
      />
      <div className={styles.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
        <button onClick={props.LogoutThunkCreator}>Logout</button>
      </div>
      Social network by Rasulov.R
    </header>
  );
};
