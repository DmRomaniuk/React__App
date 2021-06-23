import classes from './MyPosts.module.css';
import Post from "./Post/Post";

//Construction for posts
const MyPosts = (props) => {

    // method map for every post
    let postsElement = props.posts.map((postItem) => {
        return <Post message={postItem.message} likesCount={postItem.likesCount}/>
    })

    return (
        <div className={classes.myPosts__block}>
            <h3 className={classes.myPosts__title}>My Posts</h3>
            <div>
                <div className={classes.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}


export default MyPosts;