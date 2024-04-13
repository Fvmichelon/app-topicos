import React from 'react';

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="links">
        <a href="/faq">FAQ</a>
        <a href="/support">Support</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="feedback">
        <h3>Feedback & Suggestions</h3>
        <textarea placeholder="Enter your feedback here..."></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Footer;
