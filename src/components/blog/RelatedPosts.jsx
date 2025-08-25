import React from 'react';

function RelatedPosts({posts}) {

    return (
        <section className="related-posts">
            <h5 className="h3 mb-24">You might also like</h5>
            <div className="row">
                {posts.map((item) => {
                    const title = item.title.rendered;
                    const thumbImg = item.featured_image_url;
                    const slug = item.slug;
                    const rawDate = new Date(item.date);
                    const formattedDate = rawDate.toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    });

                    return (
                        <div key={item.id} className="col-lg-4 col-md-6">
                            <article className="entry">
                                <div className="entry__img-holder">
                                    <a href={`/blog/${slug}`}>
                                        <img src={thumbImg} className="entry__img" alt={title} />
                                    </a>
                                </div>
                                <div className="entry__body">
                                    <ul className="entry__meta">
                                        <li className="entry__meta-date">
                                            <span>{formattedDate}</span>
                                        </li>
                                    </ul>
                                    <h2 className="entry__title">
                                        <a href={`/blog/${slug}`}>{title}</a>
                                    </h2>
                                    <a href={`/blog/${slug}`} className="read-more">
                                        <span className="read-more__text">Read More</span>
                                        <i className="ui-arrow-right read-more__icon"></i>
                                    </a>
                                </div>
                            </article>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default RelatedPosts;