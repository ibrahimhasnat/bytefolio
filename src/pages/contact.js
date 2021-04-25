import * as React from 'react';

import Layout from '../components/layout';

import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';


const Contact = () => {

  return (
    <Layout>
      <div className="contact-section">

        <div className="contact-section-head">
          <h2>Contact Page</h2>
          <h4>For any kind of query, you can contact me. But I will never respond.</h4>
        </div>

        <ContactForm />
        <ContactInfo />

      </div>      
    </Layout>
  )

}

export default Contact;