import React from 'react';

function SpecializedNews({specializedNewsInfo,specializedNews}) {
    const firstTwo = specializedNews.slice(0, 2);
    const lastThree = specializedNews.slice(2);
    return (
        <section className="section-wrap blog-grid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog-grid__title-col d-flex flex-column mb-lg-48">
                            <div className="title-row">
                                <p className="subtitle">{specializedNewsInfo.sub_title}</p>
                                <h2 className="section-title">{specializedNewsInfo.title}</h2>
                                <p>{specializedNewsInfo.description}</p>
                            </div>
                            <div className="call-us mt-auto">
                                <i className="icon-Dispacher-2 call-us__icon"></i>
                                <span className="call-us__title">Call us anytime</span>
                                <a href="tel:1-800-995-3959" className="call-us__phone-number">{specializedNewsInfo.phone_number}</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 offset-lg-1">
                        <div className="from-blog">
                            <div className="row row-60">
                                {firstTwo.map((item, index) => {
                                    return (
                                        <div className="col-lg-6" key={index}>
                                            <article className="entry">
                                                <div className="entry__img-holder">
                                                    <a href={`/blog/${item.slug}`}>
                                                        <img src={item.featured_image} className="entry__img" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="entry__body">
                                                    <ul className="entry__meta">
                                                        <li className="entry__meta-date">
                                                            <span>{item.date}</span>
                                                        </li>
                                                    </ul>
                                                    <h4 className="entry__title">
                                                        <a href={`/blog/${item.slug}`}>{item.title}</a>
                                                    </h4>
                                                </div>
                                            </article>
                                        </div>
                                    )
                                })}

                            </div>
                            <div className="from-blog__recent-posts">
                                <ul className="from-blog__recent-posts-list">
                                    {lastThree.map((item,index)=>{
                                        return (
                                            <li className="from-blog__recent-posts-item" key={index}>
                                                <span className="from-blog__post-number">{index+1}</span>
                                                <a href={`/blog/${item.slug}`} className="from-blog__post-url">{item.title}</a>
                                            </li>

                                        )
                                    })}

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default SpecializedNews;