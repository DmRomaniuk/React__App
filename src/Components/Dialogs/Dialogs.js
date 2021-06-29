import React from "react";
import classes from './Dialogs.module.css';
import Message from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {


// method map for every dialog
    let dialogsElement = props.dialogsPageState.dialogsData.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    });

// method map for every message
    let messagesElement = props.dialogsPageState.messagesData.map((messageItem) => {
        return <Message message={messageItem.message}/>
    })

// create ref link for textarea
    let dialogTextArea = React.createRef();

// create function - button onClick
    let addInfoBtn = () => {
        props.onChangeUpdate('')
    };

    let onChangeArea = () => {
        let messageText = dialogTextArea.current.value;
        props.onChangeUpdate(messageText);
    }

    return (
        <div className={classes.dialogs}>
            <div>
                <textarea
                    ref={dialogTextArea}
                    onChange={onChangeArea}
                    value={props.dialogsPageState.messagesTextArea}
                />
                <button onClick={addInfoBtn}>
                    add some info
                </button>
            </div>
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