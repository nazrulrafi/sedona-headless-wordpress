import React from 'react';

function Portfolios({worksCategories,allWorks}) {
    return (
        <section className="section-wrap">
            <div className="container-fluid container-semi-fluid">


                <div className="masonry-filter text-center">
                    <a href="#" className="filter active" data-filter="*">All</a>
                    {worksCategories.map((item,index) => (
                        <a href="#" key={index} className="filter" data-filter={`.${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >{item.name}</a>
                    ))}
                </div>


                <div className="row masonry-grid">
                    {allWorks.map((item, index) => {
                        const rawData = new Date(item.date);
                        const formattedDate = rawData.toLocaleDateString("en-US",{
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        });
                        return (
                            <div key={index} className={`masonry-item col-lg-3 project hover-trigger ${item.work_category_names.map(cat => cat.toLowerCase()).join(" ")}`}>
                                <div className="project__container">
                                    <div className="project__img-holder">
                                        <a href={`/works/${item.slug}`}>
                                            <img src={item.acf.works_images.feature_image} alt="" className="project__img"/>
                                            <div className="hover-overlay">
                                                <div className="project__description">
                                                    <h3 className="project__title">{item.title.rendered}</h3>
                                                    <span className="project__date">{formattedDate}</span>
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

export default Portfolios;