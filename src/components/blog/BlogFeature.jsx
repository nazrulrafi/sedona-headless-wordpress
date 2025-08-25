import React from 'react';

function BlogFeature({ blogFeatureHeader }) {
    if (!blogFeatureHeader) return null;

    const formattedDate = new Date(blogFeatureHeader.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <section
            className="page-title page-title--tall blog-featured-img bg-dark-overlay text-center"
            style={{ backgroundImage: `url(${blogFeatureHeader.image})` }}
        >
            <div className="container">
                <div className="page-title__holder">
                    <h1 className="page-title__title">{blogFeatureHeader.title}</h1>
                    <ul className="entry__meta">
                        <li className="entry__meta-date">
                            <span>{formattedDate}</span>
                        </li>
                        {blogFeatureHeader.categories.map((cat, ind) => (
                            <li className="entry__meta-author" key={ind}>
                                <a href={cat.link}>{cat.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default BlogFeature;
