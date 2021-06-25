import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {rerenderEntireTree} from "./Render";
import state from "./Redux/State";
import reportWebVitals from "./reportWebVitals";

rerenderEntireTree(state);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();