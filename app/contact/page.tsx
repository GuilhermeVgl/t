'use client';

import React from "react"; 
  
export default function Contact() {
return (
  <div className="contain">
    <div className="wrapper">
      <div className="form">
        <h1 className="text-4xl font-semibold" style={{ marginBottom: '1em'}}>Talk with me</h1>
        <form id="submit-form" action="https://formspree.io/f/mbjvelbj" method="POST">
          <p>
            <input id="name" className="block w-full text-white bg-black rounded-lg form-input" name="name" placeholder="My Name is" required/>
          </p>
          <p>
            <input id="email" className="block w-full text-white bg-black rounded-lg form-input" name="email" placeholder="My E-mail is" required/>
          </p>
          <p className="full-width">
            <input id="company-name" className=" block w-full text-white bg-black rounded-lg form-input"  name="number"placeholder="My Number is" required/>
          </p>
          <p className="full-width">
            <textarea id="message" className="block w-full text-white bg-black rounded-lg form-input" name="message" placeholder="I'd like to chat about" required></textarea>
          </p>
            <button className="button" type="submit">Send</button>
        </form>
      </div>
      <div className="relative overflow-hidden" id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1923.836896844969!2d-54.5850435657698!3d-20.459523797703312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e8c031373855%3A0xe650034e2c6e5a83!2sGrand%20Park%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1699900022668!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        loading="lazy"
        className="absolute inset-0 w-full h-full"
      ></iframe>
    </div>
    </div>
  </div>
  );
}