import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {updateNewPost} from "../../Redux/State";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.profilePageState.postsData}
                     onChangeValue = {props.profilePageState.newPostText}
                     updateNewPost = {props.updateNewPost}
                     addNewPost = {props.addNewPost}
            />
        </div>
    )
}

export default Profile;