import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="row">
                    <div className="wrap">
                        <div className="app-wrapper col-md-12">
                            {/*Header*/}
                            <div className="app-wrapper-header col-md-12">
                                <Header/>
                            </div>
                            {/*/Header*/}
                            {/*Navbar && Content*/}
                            <div className="app-wrapper-display col-md-12">
                                {/*Navbar*/}
                                <div className="app-wrapper-navigation col-md-2">
                                    <NavBar state={props.appState.sideBar} />
                                </div>
                                {/*/Navbar*/}
                                {/*Content*/}
                                <div className="app-wrapper-content col-md-10">
                                    <Route /*exact*/ path="/dialogs"
                                                     render={() => <Dialogs state ={props.appState.dialogsPage}/>}
                                    />
                                    <Route path="/profile"
                                           render={() => <Profile state={props.appState.profilePage}/>}
                                    />
                                    <Route path="/news"
                                           render={() => <News/>}
                                    />
                                    <Route path="/music"
                                           render={() => <Music/>}
                                    />
                                    <Route path="/settings"
                                           render={() => <Settings/>}
                                    />
                                </div>
                                {/*/Content*/}
                            </div>
                            {/*/Navbar && Content*/}
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;


