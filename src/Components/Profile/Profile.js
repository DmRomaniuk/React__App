import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.profilePageState.postsData}
                     onChangeValue = {props.profilePageState.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;