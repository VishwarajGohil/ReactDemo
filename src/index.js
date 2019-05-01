import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './navigationBar';
import * as serviceWorker from './serviceWorker';
import Attractions from './Attractions';
import Activities from './Activities';
import ContactUs from './ContactUs';
import $ from 'jquery';


var header = React.createElement('h1', { className: '' }, 'Explore Mumbai');
ReactDOM.render(header, document.getElementById('header'));

ReactDOM.render(<App />, document.getElementById('banner'));

ReactDOM.render(<Navigation />, document.getElementById('scrollbar'));

ReactDOM.render(<Attractions />, document.getElementById('Attractions'));

ReactDOM.render(<Activities />, document.getElementById('Activities'));


ReactDOM.render(<ContactUs />, document.getElementById('Contact'));

var footer = React.createElement('p', { className: 'footer' }, 'CopyRights Reserved © 2019 Vaibhav Miglani and Vishwarajsinh Gohil');
ReactDOM.render(footer, document.getElementById('footer'));


// JQuery code below
$("#btnSubmit").click(function(){
        alert("Submitted");
});

//ReactDOM.render(<Banner />, document.getElementById('home'));


//  var homeImage = React.createElement('img', {src: homeImg});
//  ReactDOM.render(homeImage, document.getElementById('homecontainer'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
