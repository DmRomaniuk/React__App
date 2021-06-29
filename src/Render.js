import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addNewPost, onChangeUpdate, updateNewPost} from "./Redux/State";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addNewPost={addNewPost}
                updateNewPost={updateNewPost}
                onChangeUpdate={onChangeUpdate}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

