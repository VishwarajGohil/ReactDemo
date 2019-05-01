// import React from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './navigationBar';
import * as serviceWorker from './serviceWorker';
import Attractions from './Attractions';
import Activities from './Activities';
import ContactUs from './ContactUs';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));

// // JQuery code below
$("#btnSubmit").click(function(){
        alert("Submitted");
});