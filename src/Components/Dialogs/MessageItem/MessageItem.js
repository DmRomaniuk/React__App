import classes from "./MessageItem.module.css"

//every dialog message
const Message = (props) => {
    return (
        <div className={classes.dialogs_message__item}>
            - {props.message}
        </div>
    )
}

export default Message;
