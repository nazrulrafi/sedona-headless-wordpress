import React from 'react';

function ContactInfo({contactMetaInfo}) {

    return (
        <div className="col-lg-4">
            <div className="contact">
                <h5 className="contact__title">Melbourne Office</h5>
                <ul className="contact__items">
                    <li className="contact__item">
                        <span className="contact__item-label">Address:</span>
                        <address dangerouslySetInnerHTML={{__html: contactMetaInfo.address}}/>
                    </li>

                    <li className="contact__item">
                        <span className="contact__item-label">Phone: </span>
                        <a href={`tel:${contactMetaInfo.phone}`}>{contactMetaInfo.phone}</a>
                    </li>

                    <li className="contact__item">
                        <span className="contact__item-label">Email: </span>
                        <a href={`mailto:${contactMetaInfo.email}`}>{contactMetaInfo.email}</a>
                    </li>
                </ul>


                <h5 className="contact__title mt-40">Follow Us</h5>
                <div className="socials">
                    <a href={contactMetaInfo.twitter} className="social social-twitter" aria-label="twitter" title="twitter"
                       target="_blank"><i className="ui-twitter"></i></a>
                    <a href={contactMetaInfo.facebook} className="social social-facebook" aria-label="facebook"
                       title="facebook" target="_blank"><i className="ui-facebook"></i></a>
                    <a href={contactMetaInfo.youtube} className="social social-youtube" aria-label="youtube"
                       title="google plus" target="_blank"><i className="ui-youtube"></i></a>
                    <a href={contactMetaInfo.instagram} className="social social-instagram" aria-label="instagram"
                       title="instagram" target="_blank"><i className="ui-instagram"></i></a>
                </div>

            </div>
        </div>
    );
}

export default ContactInfo;