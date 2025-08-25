import React from 'react';
import Footer from "@/components/common/Footer";
import RelatedWorks from "@/components/works/RelatedWorks";
import ProjectInfo from "@/components/works/ProjectInfo";

// Fetch single works by slug
async function getSingleWorkData(slug) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/works?slug=${slug}`, {
            cache: 'no-store',
        });
        const data = await res.json();
        return data[0] || null; // slug returns array
    } catch (error) {
        console.error(error);
        return null;
    }
}
// Fetch related works by id
async function getRelatedWorkData(id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/custom/v1/related-works/${id}`, {
            cache: 'no-store',
        });
        const data = await res.json();
        return data || null; // slug returns array
    } catch (error) {
        console.error(error);
        return null;
    }
}
async function Page({params}) {
    const {slug} = await params;
    const singleWork = await getSingleWorkData(slug) || [];
    const workId = singleWork.id;
    const relatedWorks = await getRelatedWorkData(workId) || [];

    const worksGallery = singleWork.acf.works_images.works_gallery;
    const singleWorkInfo = singleWork.acf;
    const projectInfo = {
        metaInfo: singleWork.acf.works_meta_info,
        categories: singleWork.work_category_names,
    }
    return (
        <>
            <div className="slick-slider slick-single-image">
                {worksGallery.map((item, index) => {
                    return (
                        <img key={index} src={item} className="project__featured-img" alt=""/>
                    )
                })}
            </div>

            <section className="section-wrap pt-72 pb-32">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 project__info mb-md-40">
                            <h1>{singleWorkInfo.works_details.display_title}</h1>
                            <div dangerouslySetInnerHTML={{__html:singleWorkInfo.works_details.description}}/>
                            <h4>Project Goals</h4>
                            <div dangerouslySetInnerHTML={{__html:singleWorkInfo.works_details.project_goal_description}}/>

                            <div className="gallery gallery-size-large">
                                {singleWorkInfo.works_details.project_goal_images.map((item, index) => {
                                    return (
                                        <figure className="gallery-item" key={index}>
                                            <div className="gallery-icon landscape">
                                                <img src={item} className="attachment-large size-large" alt=""/>
                                            </div>
                                        </figure>
                                    )
                                })}
                            </div>
                            <h4>Our Approach</h4>
                            <div dangerouslySetInnerHTML={{__html:singleWorkInfo.works_details.our_approch_description}}/>

                        </div>

                        <ProjectInfo projectInfo={projectInfo}/>
                    </div>
                </div>
            </section>

            <RelatedWorks rw={relatedWorks}/>
        </>
    );
}

export default Page;