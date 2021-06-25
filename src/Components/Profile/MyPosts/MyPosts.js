import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

//Construction for posts
const MyPosts = (props) => {

    // method map for every post
    let postsElement = props.posts.map((postItem) => {
        return <Post message={postItem.message} likesCount={postItem.likesCount}/>
    })

    // create ref link for textarea
    let textAreaElement = React.createRef();

    // create function - button onClick for post adding
    let addPost = () => {
      let text = textAreaElement.current.value;
      props.addNewPost(text);
      textAreaElement.current.value = '';
    };

    return (
        <div className={classes.myPosts__block}>
            <h3 className={classes.myPosts__title}>My Posts</h3>
            <div>
                <textarea ref={textAreaElement}>
                    Write your text...
                </textarea>
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