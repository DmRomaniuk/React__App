import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

//Construction for posts
const MyPosts = (props) => {

    // method map for every post on the page
    let postsElement = props.posts.map((postItem) => {
        return <Post message={postItem.message} likesCount={postItem.likesCount}/>
    })

    // create ref link for textarea
    let textAreaElement = React.createRef();

    // create function - button onClick for post adding
    let addPost = () => {
        props.addNewPost();
        props.updateNewPost('');
    };

    // function for textarea value(Redux(BLL) - state has changed and only after that, UI - textarea has changed)
    let onPostChange = () => {
        let text = textAreaElement.current.value;
        props.updateNewPost(text);
    }

    return (
        <div className={classes.myPosts__block}>
            <h3 className={classes.myPosts__title}>My Posts</h3>
            <div>
                <textarea
                    ref={textAreaElement}
                    onChange={onPostChange}
                    value={props.onChangeValue}
                />
            </div>
            <div>
                <button onClick={addPost}>
                    Add Post
                </button>
            </div>
            <div>
                <div className={classes.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}


export default MyPosts;