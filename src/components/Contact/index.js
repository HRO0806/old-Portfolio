import React from 'react';
import './Contact.css';

function Contact() {

    return(
        <div label="contact" className={'big-contact-container'}>
            <div className={'contact-title-container'}>
                <h2 className={'contact-title'}>Contact Me</h2>
            </div>
            <div className={'container-container'}>
                <div className={'contact-form-container'}>
                    <form className={'contact-form'}>
                        <div className={'user-info'}> 
                            <label className={'user-info-label'}>Name:</label>
                            <input className={'user-info-text'} id={'name-field'} required></input>
                        </div>
                        <div className={'user-info'}>
                            <label className={'user-info-label'} for='email'>Email:</label>
                            <input className={'user-info-text'} id={'email-field'} type='email' required></input>
                        </div>
                        <div className={'user-info'} id={'text'}>
                            <label className={'user-info-label'}>contents:</label>
                            <textarea className={'user-info-text'} id={'text-field'} required></textarea>
                        </div>
                        <div>
                            <button type={'submit'} className={'submit-btn'}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;