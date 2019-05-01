import React, { Component } from 'react';
import Gateway from './img/gateway.jpg';
import Marine from './img/marine.jpg';

class Attractions extends Component {
    render()
    {
        return(
            <div id="Attractions">
                <h2>Attractions</h2>
                <div className="row">
                <div className="column">
                    <img src={Gateway} className="fullImage" alt="gateway of India"></img>
                </div>
                <div className="column">
                    <img src={Marine} className="fullImage" alt="Marine drive"></img>
                </div> 
                <div className="column">
                    <img src={Gateway} className="fullImage" alt="gateway of India"></img>
                </div>

                </div>
            </div>
        );
    }
}

export default Attractions;
