import classes from './Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    return(
        <div className={classes.friends__wrapper}>
            <NavLink to="/dialogs">
                <img src={props.img} alt="photo" className={classes.userImage}/>
            </NavLink>
        </div>
    )
}

export default Friends;