import React from 'react';
import './Contact.css';

const Contact = () => {
    return ( <
        section className = "contact"
        id = "contact" >
        <
        h2 > Contact Us < /h2> <
        p className = "contact-intro" > We’ d love to hear from you!Reach out
        for orders, inquiries, or collaborations. < /p> <
        div className = "contact-details" >
        <
        div className = "contact-info" >
        <
        p > < strong > Email: < /strong> hello@wigwise.com</p >
        <
        p > < strong > Phone: < /strong> +254 712 345 678</p >
        <
        p > < strong > Location: < /strong> Nairobi, Kenya</p >
        <
        /div> <
        form className = "contact-form" >
        <
        input type = "text"
        placeholder = "Your Name"
        required / >
        <
        input type = "email"
        placeholder = "Your Email"
        required / >
        <
        textarea placeholder = "Your Message"
        rows = "4"
        required > < /textarea> <
        button type = "submit" > Send Message < /button> <
        /form> <
        /div> <
        /section>
    );
};

export default Contact;