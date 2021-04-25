import * as React from 'react';
import { FiMapPin, FiMail, FiPhoneCall } from 'react-icons/fi';

import './contactInfo.css'

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div>
        <FiMapPin />
        <h4>Address</h4>
        <p>Localhost, House No 201, Road No 404, City, Country</p>
      </div>
      <div>
        <FiMail />
        <h4>Email Address</h4>
        <p>hello@domain.com <br/>contact@domain.com</p>
      </div>
      <div>
        <FiPhoneCall />
        <h4>Phone</h4>
        <p>123-456-7890 <br/>098-765-4321</p>
      </div>               
    </div>
  )
}

export default ContactInfo;