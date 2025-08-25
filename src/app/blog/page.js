export const dynamic = 'force-dynamic'; // ✅ Add this

import React from 'react';
import FeatureHeader from "@/components/common/FeatureHeader";

async function getBlogPageData() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/pages?slug=blog`, {
            cache: 'no-store',
        });
        const blogPageMeta = await res.json();
        return blogPageMeta;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function getAllBlogs(page = 1, perPage = 9) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}`,
            { cache: 'no-store' }
        );

        const totalPages = res.headers.get("X-WP-TotalPages") || 1;
        const allBlogs = await res.json();
        return { allBlogs, totalPages: Number(totalPages) };
    } catch (error) {
        console.error(error);
        return { allBlogs: [], totalPages: 1 };
    }
}

export default async function Page({ searchParams }) {
    const sp = await searchParams;
    const currentPage = Number(sp.page) || 1;

    const blogPageMeta = await getBlogPageData();
    const { allBlogs, totalPages } = await getAllBlogs(currentPage, 9);

    const featureHeaderContent = {
        title: blogPageMeta?.[0].title.rendered,
        content: blogPageMeta?.[0]?.content.rendered,
        featureImage: blogPageMeta?.[0]?.featured_image_url
    };

    return (
        <>
            <FeatureHeader featureHeaderContent={featureHeaderContent} />

            <section className="section-wrap">
                <div className="container">
                    <div className="row">
                        {allBlogs.map((item) => {
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

                    {/* Pagination */}
                    <nav className="pagination">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <a
                                key={i + 1}
                                href={`/blog?page=${i + 1}`}
                                className={`page-numbers ${currentPage === i + 1 ? "current" : ""}`}
                            >
                                {i + 1}
                            </a>
                        ))}

                        {currentPage < totalPages && (
                            <a href={`/blog?page=${currentPage + 1}`} className="next page-numbers">
                                <i className="ui-arrow-right"></i>
                            </a>
                        )}
                    </nav>
                </div>
            </section>
        </>
    );
}
