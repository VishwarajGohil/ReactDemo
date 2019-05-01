import React, { Component } from 'react';

class Navigation extends Component {
    render()
    {
        return(
        <div>
        <a class="active" href="#home">Home</a>
        <a href="#Attractions">Attractions</a>
        <a href="#Activities">Activities</a>
        <a href="#Contact">Contact Us</a>
        </div>
        );
    }
}

export default Navigation;