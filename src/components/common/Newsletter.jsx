import React from 'react';

function Newsletter(props) {
    return (
        <section className="section-wrap bg-light newsletter">
            <div className="container">
                <div className="title-row title-row--boxed text-center">
                    <h3 className="section-title">Our Daily Newsletter</h3>
                    <p className="lead">Get the latest and our most important news</p>
                </div>
                <div className="widget widget_mc4wp_form_widget">
                    <div className="newsletter__container">
                        <div className="newsletter__form">
                            <form className="mc4wp-form" method="post">
                                <div className="mc4wp-form-fields">
                                    <div className="form-group">
                                        <input type="email" name="EMAIL" placeholder="Your email" required=""/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn--lg btn--color"
                                               value="Subscribe Now"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;