import React from 'react';
import BlogFeature from "@/components/blog/BlogFeature";
import Newsletter from "@/components/common/Newsletter";
import BlogDetails from "@/components/blog/BlogDetails";
import RelatedPosts from "@/components/blog/RelatedPosts";
import CommentList from "@/components/blog/CommentList";
import CommentForm from "@/components/blog/CommentForm";

// Fetch single blog by slug
async function getSingleBlogData(slug) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/posts?slug=${slug}`, {
            cache: 'no-store',
        });
        const data = await res.json();
        return data[0] || null; // slug returns array
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Fetch related posts by category
async function getRelatedPosts(categories, excludeId, perPage = 3) {
    if (!categories?.length) return [];
    const categoryIds = categories.map(cat => cat.id).join(',');
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/posts?categories=${categoryIds}&exclude=${excludeId}&per_page=${perPage}`);
    const data = await res.json();
    return data;
}

// Page component for dynamic slug
async function Page({ params }) {
    const { slug } = await params; // destructure directly
    const blog = await getSingleBlogData(slug);


    const blogFeatureHeader ={
        title : blog.title.rendered,
        date : blog.date,
        categories : blog.categories,
        image: blog.featured_image_url
    }
    const relatedPosts = await getRelatedPosts(blog.categories, blog.id);

    return (
        <>
            <BlogFeature blogFeatureHeader={blogFeatureHeader}/>
            <section className="section-wrap pt-40 pb-48">
                <div className="box-offset-container">
                    <div className="blog__content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10">
                                    <BlogDetails blog={blog} />
                                    <RelatedPosts posts={relatedPosts} />
                                    <CommentList postId={blog.id} />
                                    <CommentForm postId={blog.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Newsletter />
        </>
    );
}

export default Page;

