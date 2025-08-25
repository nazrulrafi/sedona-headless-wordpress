import React from 'react';

function Process({serviceProcessInfo}) {
    return (

        <section
            className="section-wrap bg-dark-overlay"
            style={{backgroundImage: `url(${serviceProcessInfo.bgImg})`}}
        >
            <div className="container">
                <div className="row">
                    {serviceProcessInfo.serviceItem.map((item, ind) => {
                        return (
                            <div className="col-lg-3 col-md-6" key={ind}>
                                <div className="process">
                                    <i className={`${item.icon} process__icon`}></i>
                                    <h4 className="process__title">{item.title}</h4>
                                    <p className="process__text">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

    );
}

export default Process;