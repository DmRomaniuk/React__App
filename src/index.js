import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';
import {addNewMessage, addNewPost, onChangeUpdate, subscribe, updateNewPost} from "./Redux/State";
import state from "./Redux/State";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addNewPost={addNewPost}
                updateNewPost={updateNewPost}
                onChangeUpdate={onChangeUpdate}
                addNewMessage={addNewMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();