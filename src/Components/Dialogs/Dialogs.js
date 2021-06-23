import classes from './Dialogs.module.css';
import Message from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {


//method map for every dialog
    let dialogsElement = props.state.dialogsData.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    });

//method map for every message
    let messagesElement = props.state.messagesData.map((messageItem) => {
        return <Message message={messageItem.message}/>
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__wrapper}>
                {/*DialogItem List*/}
                <div className={classes.dialogs_wrapper__list}>
                    {dialogsElement}
                </div>
                {/*Messages*/}
                <div className={classes.dialogs_wrapper__messages}>
                    {messagesElement}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;