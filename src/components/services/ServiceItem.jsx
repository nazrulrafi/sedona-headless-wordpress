import React from 'react';

function ServiceItem({servicesInfo}) {

    return (
        <>

            <section className="section-wrap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="intro text-center">
                                <h2 className="mb-32">{servicesInfo.title}</h2>
                                <div dangerouslySetInnerHTML={{__html:servicesInfo.description}} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     
            <section className="section-wrap pt-0 pb-0">
                <div className="container">
                    <div className="row">
                        {servicesInfo.serviceItem.map((item, index) => {
                            return (
                                <div className="col-xl-4 col-lg-6" key={index}>
                                    <div className="service-1">
                                        <a href="#" className="service-1__url hover-scale">
                                            <img src={item.service_image} className="service-1__img"
                                                 alt=""/>
                                        </a>
                                        <div className="service-1__info">
                                            <h3 className="service-1__title">{item.title}</h3>
                                            <p>{item.description}</p>
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

export default ServiceItem;