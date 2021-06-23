import classes from "./sidebar.module.css";
import Friends from "./userInfo/Friends";

const OnlineIndicate = (props) => {

    //method map for every user
    let everyUser = props.users.map((user) => {
        return <Friends img={user.image}/>
    })

    return (
        <div className={classes.sideBar__wrapper}>
            {everyUser}
        </div>
    )
}

export default OnlineIndicate;