import React, { Component } from 'react';

class ContactUs extends Component {
    render()
    {
        return(
<div id="Contact" class="contactcontainer">
    <h2>CONTACT US</h2>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Please Enter First Name"></input>
    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Please Enter Last Name"></input>
    <label for="country">Country</label>
    <select id="country" name="country">
            <option value="india">India</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
    </select>
    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Enter...."></textarea>
    <input type="submit" id="btnSubmit" value="Submit"></input>

</div>
        );
    }
} 

export default ContactUs;