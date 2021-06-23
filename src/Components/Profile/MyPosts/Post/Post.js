import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.post_Item__image}>
                <img src="https://avatarko.ru/img/kartinka/11/multfilm_ulybka_Timon_10209.jpg" alt="avatarka"/>
            </div>
            <div className={classes.post_Item_info__wrapper}>
                <div className={classes.post__message}>
                    {props.message}
                </div>
                <div className={classes.post__likes}>
                    likes: {props.likesCount}
                </div>
            </div>
        </div>
    )
}

export default Post;