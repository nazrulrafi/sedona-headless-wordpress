import React from 'react';

function DesigningSec({designSecData}) {

    return (
        <>
            <section className="section-wrap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="intro text-center">
                                <h2 className="mb-32">{designSecData.title}</h2>
                                <div dangerouslySetInnerHTML={{__html:designSecData.description}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-wrap pt-0 pb-0">
                <div className="container">
                    <div className="row">
                        {designSecData.about_item.map((item, index) => {
                            return (
                                <div className="col-xl-4 col-lg-6" key={index}>
                                    <div className="service-1">
                                        <a href="#" className="service-1__url hover-scale">
                                            <img src={item.image} className="service-1__img"
                                                 alt=""/>
                                        </a>
                                        <div className="service-1__info">
                                            <h3 className="service-1__title">{item.title}</h3>
                                            <ul className="service-1__features">
                                                {item.content.map((contentItem, ind) => {
                                                    return (
                                                        <li key={ind} className="service-1__feature">
                                                            <i className="ui-check service-1__feature-icon"></i>
                                                            <span
                                                                className="service-1__feature-text">{contentItem.content_item}</span>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    );
}

export default DesigningSec;