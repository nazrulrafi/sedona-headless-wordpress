export const dynamic = 'force-dynamic'; // ✅ Add this

import React from 'react';
import FeatureHeader from "@/components/common/FeatureHeader";
import DesigningSec from "@/components/about/DesigningSec";
import Counter from "@/components/about/Counter";
import OurSpecialists from "@/components/about/OurSpecialists";

async function getAboutPageData() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/pages?slug=about`, {
            cache: 'no-store', // optional, prevents caching during dev
        });
        const aboutPageMeta = await res.json();
        return aboutPageMeta;
    } catch (error) {
        console.error(error);
        return null;
    }
}
async function About(props) {
    const aboutPageMeta = await getAboutPageData();

    const featureHeaderContent = {
        title:  aboutPageMeta?.[0].title.rendered,
        content:  aboutPageMeta?.[0]?.content.rendered,
        featureImage: aboutPageMeta?.[0]?.featured_image_url
    }

    const designSecData = aboutPageMeta?.[0]?.acf?.about_section || {}
    const counter = aboutPageMeta?.[0]?.acf?.counter || []
    const specialistsSec = aboutPageMeta?.[0]?.acf?.specialists_section || {}
    return (
           <>
               <FeatureHeader featureHeaderContent={featureHeaderContent}/>
               <DesigningSec designSecData={designSecData}/>
               <Counter counter={counter}/>
               <OurSpecialists specialistsSec={specialistsSec}/>
           </>
    );
}

export default About;