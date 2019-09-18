import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './../src/pseudoRedux/redux';
import {addPost} from './../src/pseudoRedux/redux';

let rerender = () => {
    ReactDOM.render(<App state={ state } addPost={addPost}/>, document.getElementById('root'));
};

export default rerender;
