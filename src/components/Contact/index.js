import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers'
import styles from "./style.module.css";
import coverImage from '../../assets/images/curtains.jpg'


function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };


    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        console.log('errorMessage', errorMessage);
    }


    // JSX
    return (
        <section class="card">
            <div class={styles["container"]}>
                <section className={styles["contact-form"]} class="is-overlay">
                    <img class="card-image" src={coverImage} width="100%" alt="cover" />
                    <div className={styles["contact-block"]}>
                        <h1 className={styles["contact-section"]} id="contact">Contact me</h1>
                        <form action="mailto:PGCranford@gmail.com" method="get" enctype="text/plain" id="contact-form" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className={styles["form-input"]}>Name:</label>
                                <input type="text" name="name" defaultValue={name} onBlur={handleChange} className={styles["form-space"]} />
                            </div>
                            <div>
                                <label htmlFor="email" className={styles["form-input"]}>Email address:</label>
                                <input type="email" name="email" defaultValue={email} onBlur={handleChange} className={styles["form-space"]} />
                            </div>
                            <div>
                                <label htmlFor="message" className={styles["form-input"]}>Message:</label>
                                <textarea name="message" rows="7" cols="35" defaultValue={message} onBlur={handleChange} className={styles["form-space"]} />
                            </div>
                            {errorMessage && (
                                <div>
                                    <p className="error-text">{errorMessage}</p>
                                </div>
                            )}
                            <button id="button" type="submit">Submit</button>
                        </form>
                    </div>
                </section >
            </div >
        </section>
    )
}

export default Contact;