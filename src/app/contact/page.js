export const dynamic = 'force-dynamic'; // ✅ Add this
import React from 'react';

import FeatureHeader from "@/components/common/FeatureHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import Gmap from "@/components/contact/Gmap";

async function getContactPageData() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/pages?slug=contact`, {
            cache: 'no-store', // optional, prevents caching during dev
        });
        const contactPageMeta = await res.json();
        return contactPageMeta;
    } catch (error) {
        console.error(error);
        return null;
    }
}
async function Page(props) {
    const contactPageData = await getContactPageData();
    const featureHeaderContent = {
        title:  contactPageData?.[0].title.rendered,
        content:  contactPageData?.[0]?.content.rendered,
        featureImage: contactPageData?.[0]?.featured_image_url
    }

    const contactMetaInfo = contactPageData?.[0]?.acf

    return (
         <>
             <FeatureHeader featureHeaderContent={featureHeaderContent}/>
             <section className="section-wrap">
                 <div className="container">
                     <div className="row">
                         <ContactInfo contactMetaInfo={contactMetaInfo}/>
                         <ContactForm/>
                     </div>
                 </div>
             </section>

             <Gmap/>
         </>

    );
}

export default Page;