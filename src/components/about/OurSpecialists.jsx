import React from 'react';

function OurSpecialists({specialistsSec}) {
    return (
        <section className="section-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="blog-grid__title-col d-flex flex-column mb-lg-48">
                            <div className="title-row">
                                <p className="subtitle">{specialistsSec.sub_title}</p>
                                <h2 className="section-title">{specialistsSec.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: specialistsSec.description }} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 offset-lg-1">
                        <div className="slick-slider slick-team">
                            {specialistsSec.specialisits_item.map((item, index) => {
                                return (
                                    <div className="team-col" key={index}>
                                        <div className="team hover-trigger">
                                            <div className="team__img-holder">
                                                <img src={item.image} alt="" className="team__img"/>
                                                <div className="hover-overlay">
                                                    <div className="team__details text-center">
                                                        <div className="socials socials--white">
                                                            <a href={item.twitter} className="social social-twitter"
                                                               aria-label="twitter" title="twitter" target="_blank"><i
                                                                className="ui-twitter"></i></a>
                                                            <a href={item.facebook} className="social social-facebook"
                                                               aria-label="facebook" title="facebook" target="_blank"><i
                                                                className="ui-facebook"></i></a>
                                                            <a href={item.youtube} className="social social-youtube"
                                                               aria-label="youtube" title="google plus" target="_blank"><i
                                                                className="ui-youtube"></i></a>
                                                            <a href={item.instagram} className="social social-instagram"
                                                               aria-label="instagram" title="instagram" target="_blank"><i
                                                                className="ui-instagram"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h5 className="team__name">{item.name}</h5>
                                            <span className="team__occupation">{item.designation}</span>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default OurSpecialists;