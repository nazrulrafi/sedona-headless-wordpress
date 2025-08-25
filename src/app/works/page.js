export const dynamic = 'force-dynamic'; // ✅ Add this
import React from 'react';
import FeatureHeader from "@/components/common/FeatureHeader";
import Portfolios from "@/components/works/portfolios";

async function getWorksPageData() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/pages?slug=works`, {
            cache: 'no-store', // optional, prevents caching during dev
        });
        const worksPageMeta = await res.json();
        return worksPageMeta;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function getWorksCategories() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/work-category`, {
            cache: 'no-store', // optional, prevents caching during dev
        });
        const worksCategory = await res.json();
        return worksCategory;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function getAllWorks() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/works`, {
            cache: 'no-store', // optional, prevents caching during dev
        });
        const allWorks = await res.json();
        return allWorks;
    } catch (error) {
        console.error(error);
        return null;
    }
}
async function Page(props) {
    const worksPageMeta = await getWorksPageData();
    const worksCategories = await getWorksCategories();
    const allWorks = await getAllWorks();

    const featureHeaderContent = {
        title:  worksPageMeta?.[0].title.rendered,
        content:  worksPageMeta?.[0]?.content.rendered,
        featureImage: worksPageMeta?.[0]?.featured_image_url
    }
    return (
           <>
               <FeatureHeader featureHeaderContent={featureHeaderContent}/>
               <Portfolios worksCategories={worksCategories} allWorks={allWorks}/>
           </>
    );
}

export default Page;