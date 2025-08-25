import React from 'react';

function BlogDetails({blog}) {
    return (
        <article className="entry mb-0">
            <div className="entry__article-wrap">
                <div className="entry__share">
                    <div className="sticky-col">
                        <div className="socials socials--rounded socials--base">
                            <a className="social social-facebook" href="#" title="facebook"
                               target="_blank" aria-label="facebook">
                                <i className="ui-facebook"></i>
                            </a>
                            <a className="social social-twitter" href="#" title="twitter"
                               target="_blank" aria-label="twitter">
                                <i className="ui-twitter"></i>
                            </a>
                            <a className="social social-google-plus" href="#" title="google"
                               target="_blank" aria-label="google">
                                <i className="ui-google"></i>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="entry__article">

                    <div dangerouslySetInnerHTML={{__html: blog.content.rendered}}/>

                    <div className="entry__tags">
                        <i className="ui-tags"></i>
                        <span className="entry__tags-label">Tags:</span>
                        {blog.tags.map((tag, ind) => (
                            <a href="#" rel="tag" key={ind}>{tag.name}, </a>
                        ))}

                    </div>


                </div>
            </div>

        </article>
    );
}

export default BlogDetails;