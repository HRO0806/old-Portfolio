import React, {useRef} from 'react';
import emailjs from "emailjs-com"
import './Contact.css';

function Contact() {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_w87l5wq', 'template_k9tow8i', form.current, 'M4mJ_bEiZI_BOLGvq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    return(
        <div label="contact" className={'big-contact-container'}>
            <div className={'contact-title-container'}>
                <h2 className={'contact-title'}>Contact Me</h2>
            </div>
            <div className={'container-container'}>
                <div className={'contact-form-container'} onSubmit={sendEmail}>
                    <p className={'phone-number'}>My phone number is 651-492-3132</p>
                    <form ref={form} className={'contact-form'}>
                        <div className={'user-info'}> 
                            <label className={'user-info-label'}>Name:</label>
                            <input className={'user-info-text'} id={'name-field'} required name={'name'}></input>
                        </div>
                        <div className={'user-info'}>
                            <label className={'user-info-label'} for='email'>Email:</label>
                            <input className={'user-info-text'} id={'email-field'} type='email' required name={'email'}></input>
                        </div>
                        <div className={'user-info'} id={'text'}>
                            <label className={'user-info-label'}>contents:</label>
                            <textarea className={'user-info-text'} id={'text-field'} required name='message'></textarea>
                        </div>
                        <div>
                            <button value="Send" type={'submit'} className={'submit-btn'}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;