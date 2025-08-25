import React from 'react';

function RecentWorks({workCategories,recentWorks}) {
    return (
        <section className="section-wrap pt-72 pb-72 pb-lg-40">
            <div className="container">
                <div className="title-row">
                    <h2 className="section-title">Discover Recent Works</h2>
                </div>


                <div className="masonry-filter">
                    <a href="#" className="filter active" data-filter="*">All</a>
                    {workCategories.map((item,index) => (
                        <a href="#" key={index} className="filter" data-filter={`.${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >{item.name}</a>
                    ))}
                </div>

                <div className="row masonry-grid">
                    {recentWorks.map((item, index) => (
                        <div
                            key={item.id}
                            className={`masonry-item col-lg-4 project hover-trigger ${item.categories.map(cat => cat.toLowerCase()).join(" ")}`}
                        >
                            <div className="project__container">
                                <div className="project__img-holder">
                                    <a href={`/works/${item.slug}`}>
                                        <img src={item.featured_image} alt={item.title} className="project__img"/>
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
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RecentWorks;