import React from 'react';

function RelatedWorks({rw}) {
    return (
        <section className="section-wrap pt-32">
            <div className="container">
                <div className="title-row mb-48">
                    <h2 className="section-title">Related Projects</h2>
                </div>
                <div className="row">
                    {rw.map((item, index) => {
                        return (
                            <div key={index} className={`masonry-item col-lg-3 project hover-trigger`}>
                                <div className="project__container">
                                    <div className="project__img-holder">
                                        <a href={`/works/${item.slug}`}>
                                            <img src={item.featured_image} alt="" className="project__img"/>
                                            <div className="hover-overlay">
                                                <div className="project__description">
                                                    <h3 className="project__title">{item.title}</h3>
                                                    <span className="project__date">{item.date}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    );
}

export default RelatedWorks;