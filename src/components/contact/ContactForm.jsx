"use client";
import React, {useState} from 'react';
import {submitContactForm} from "@/components/contact/contactFormAction";

function ContactForm(props) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target).entries());
        setLoading(true);

        try {
            const response = await submitContactForm(formData);
            setMessage(response.message);
            e.target.reset();
        } catch (err) {
            console.error(err);
            setMessage("Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="col-lg-7 offset-lg-1">
            <h2 className="section-title">Get a Free Quote</h2>
            <p className="mb-40">If you have any question about project cost, get in touch.</p>

            {/* ✅ use onSubmit here */}
            <form id="contact-form" className="contact-form material" method="post" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="material__form-group form-group">
                            <input type="text" name="name" id="name"
                                   className="form-input material__input" required/>
                            <label htmlFor="name" className="material__label">Name
                                <abbr title="required" className="required">*</abbr>
                            </label>
                            <span className="material__underline"></span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="material__form-group form-group">
                            <input type="email" name="email" id="email"
                                   className="form-input material__input" required/>
                            <label htmlFor="email" className="material__label">Email
                                <abbr title="required" className="required">*</abbr>
                            </label>
                            <span className="material__underline"></span>
                        </div>
                    </div>
                </div>

                <div className="material__form-group form-group">
                    <input type="text" name="subject" id="subject"
                           className="form-input material__input"/>
                    <label htmlFor="subject" className="material__label">Subject</label>
                    <span className="material__underline"></span>
                </div>

                <div className="material__form-group form-group">
                    <textarea id="message" name="message" rows="7"
                              className="form-input material__input" required></textarea>
                    <label htmlFor="message" className="material__label">Message
                        <abbr title="required" className="required">*</abbr>
                    </label>
                    <span className="material__underline"></span>
                </div>

                <input type="submit" className="btn btn--lg btn--color btn--button" value="Send Message"
                       id="submit-message"/>

            </form>
            {/* ✅ Correct conditional rendering */}
            {message && (
                <div
                    id="msg"
                    className="message"
                    style={{ color: "green", border: "1px solid green", padding: "8px", margin: "5px" }}
                >
                    {message}
                </div>
            )}


        </div>
    );
}

export default ContactForm;
