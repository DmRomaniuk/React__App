import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";

import OnlineIndicate from "../FriendsSideBar/sideBar";

const NavBar = (props) => {
    return (
        <div>
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.active__Link}>
                        Profile
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs" activeClassName={classes.active__Link}>
                        Messages
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/news" activeClassName={classes.active__Link}>
                        News
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/music" activeClassName={classes.active__Link}>
                        Music
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/settings" activeClassName={classes.active__Link}>
                        Settings
                    </NavLink>
                </div>
            </nav>
            {/*SIDEBAR*/}
            <div className={classes.sideBar__wrapper}>
                <div className={classes.indicate}>
                    <h2 className={classes.sideBar__title}> Friends </h2>
                    <div className={classes.online}></div>
                </div>
                <OnlineIndicate users ={props.state.users} />
            </div>
            {/*/SIDEBAR*/}
        </div>

    )
}
export default NavBar;