import React, { Component } from 'react';
import Elephanta from './img/Elephanta.jpg';
import Bicycle from './img/download.jpg'; 
import Cst from './img/cst.jpg';


class Activities extends Component{
    render()
    {
        return(
<div id="Activities">
    <h2>Activites To Do</h2>
    <div className="row">
        <div className="column">
        <div className="content">
            <img src={Elephanta} className="fullImage" alt="Elephanta"></img>
            <h3>Elephanta Caves Tour</h3>
            <p>
                        Elephanta Caves, a UNESCO World Heritage Site.There are seven cave excavations in the Elephanta group.
                        They are located in Elephanta Island.
                        <a href="javascript:void(0)">See Details...</a>
            </p>
        </div>
        </div>
        <div className="column">
        <div className="content">
            <img src={Bicycle} className="fullImage" alt="Bicycle ride"></img>
            <h3>Bicycle across City</h3>
            <p>
                        Cycling is a truly invigorating and liberating experience, enjoyed by people of all ages and from all walks of life.
                        Whether you’re cycling to work, to school, to the shops or just for fun,bicycle is an easy way to get more active.
                        <a href="javascript:void(0)">See Details...</a>
            </p>
        </div>
        </div>
        <div className="column">
        <div className="content">
            <img src={Cst} className="fullImage" alt="CST"></img>
            <h3>City Tour</h3>
            <p>
                        Explore the whole city for a Day. We will take you to  Gateway Of India,SidhiVinayak Temple,
                        Juhu Beach,CST Railway Station,Taj.	<a href="javascript:void(0)">See Details...</a>
            </p>
        </div>
        </div>
    </div>
</div>
        );
    }
}

export default Activities;