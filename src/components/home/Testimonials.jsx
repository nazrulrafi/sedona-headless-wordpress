import React from 'react';

function Testimonials({testimonialsData}) {
    return (
        <section className="section-wrap bg-dark-overlay"
                 style={{backgroundImage: "url('/assets/img/testimonials/bg.jpg')"}}>
            <div className="container">
                <div className="title-row text-center">
                    <p className="subtitle">{testimonialsData.subtitle}</p>
                    <h2 className="section-title">{testimonialsData.title}</h2>
                    <i className="quote">“</i>
                </div>

                <div className="slick-slider slick-testimonials">
                    {testimonialsData.testimonial_item.map((item, index) => {
                        return (
                            <div key={index} className="testimonial clearfix">
                                <div className="testimonial__body">
                                    <p className="testimonial__text">“{item.testimonial_content}”</p>
                                </div>
                                <div className="testimonial__info">
                                    <span className="testimonial__author">{item.name}</span>
                                    <span className="testimonial__company">{item.designation}</span>
                                </div>
                            </div>
                        )
                    })}


                </div>


            </div>
        </section>

    );
}

export default Testimonials;