import * as React from 'react';
import './contactForm.css'

const ContactFrom = () => {

  const [message, setMessage] = React.useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setMessage('Congrats, you successfully sent it to Mars!!! ')
  }

  if (message) {
    setTimeout(() => { setMessage('') }, 5000)
  }

  return (
    <div className="contact-form">
      {message && <p className="message">{message}</p>}

      <form className="form-details" onSubmit={onSubmit}>
          <input name="firstName" type="text" placeholder="First Name"/>
          <input name="lastName" type="text" placeholder="Last Name"/>
          <input name="email" type="text" placeholder="Email"/>
          <input name="subject" type="text" placeholder="Subject"/>
          <textarea name="content" className="full-width" placeholder="Message"></textarea>
          <input className="full-width" value="Send" type="submit" />   
      </form>
    </div>
  )
}

export default ContactFrom;