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
            <div className="app-wrapper">
                {/*Header*/}
                <Header/>
                {/*/Header*/}
                {/*Navbar && Content*/}
                <div className="app-wrapper-display">
                    {/*Navbar*/}
                    <div className="app-wrapper-navigation">
                        <NavBar state={props.appState.sideBar} />
                    </div>
                    {/*/Navbar*/}
                    {/*Content*/}
                    <div className="app-wrapper-content">
                        <Route /*exact*/ path="/dialogs"
                                         render={() =><Dialogs state ={props.appState.dialogsPage}/>}
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
        </BrowserRouter>
    )
};

export default App;


