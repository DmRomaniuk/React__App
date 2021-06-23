import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

//every dialog
const DialogItem = (props) => {
    let dialogPath = "/dialogs/" + props.id;
    let name = props.name;
    return (
        <div className={classes.dialog_list__item}>
            {/* {} - коли ми обгортуємо код фігурними дужками,цим ми вказуємо що там буде JavaScript код */}
            <NavLink to={dialogPath} activeClassName ={classes.activeName}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;
