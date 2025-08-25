import React from 'react';

function Experience({experienceData}) {
    return (
        <section className="section-wrap intro pb-40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h2 className="intro__title">{experienceData.title}</h2>
                        <div className="experience_description" dangerouslySetInnerHTML={{__html:experienceData.description}}/>
                        <div className="row mb-lg-48">
                            {experienceData.icon_box.map((item, index) => (
                                <div className="col-sm-4" key={index}>
                                    <div className="feature">
                                        <i className={`${item.icon} feature__icon`}></i>
                                        <h4 className="feature__title">{item.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <img src={experienceData.experience_image} className="img-full-width" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;