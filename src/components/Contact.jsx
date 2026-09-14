import { useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

export default function Contact() {
  const sectionRef = useScrollAnimation();
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formRef.current || !formRef.current.reportValidity()) {
      return;
    }

    setSending(true);
    window.setTimeout(() => {
      formRef.current?.reset();
      setSending(false);
    }, 2000);
  };

  return (
    <div ref={sectionRef} className="contact_group scroll-animate">
      <div className="cg_above">
        <h1>Contact</h1>
      </div>
      <div className="cg_below">
        <div className="below_contact">
          <h2>Drop me a message</h2>
          <div className="reach">
            <ul>
              <li>
                <img src="/images/call.png" alt="" />
                <span>+233 591142812</span>
                <br />
                <br />
              </li>
              <li>
                <img src="/images/mail.png" alt="" />
                <span>obednkrumah41@gmail.com</span>
                <br />
                <br />
              </li>
              <li>
                <img src="/images/location.png" alt="" />
                <span>Accra, Ghana</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="below_form">
          <form ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your Name" required />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Your Email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" required />
          </form>
          <button type="button" disabled={sending} onClick={handleSubmit}>
            {sending ? 'Message Sent' : 'Send Message'}
          </button>
        </div>
      </div>
    </div>
  );
}
