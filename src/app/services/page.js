export const dynamic = 'force-dynamic'; // ✅ Add this
import React from 'react';
import FeatureHeader from "@/components/common/FeatureHeader";
import ServiceItem from "@/components/services/ServiceItem";
import Process from "@/components/services/Process";

import Cta from "@/components/common/CTA";

async function getServicesPageData() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/pages?slug=services`, {
            cache: 'no-store', // optional, prevents caching during dev
        });
        const servicesPageMeta = await res.json();
        return servicesPageMeta;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default async function Page(props) {
    const servicesPageMeta = await getServicesPageData();

    const featureHeaderContent = {
        title:  servicesPageMeta?.[0].title.rendered,
        content:  servicesPageMeta?.[0]?.content.rendered,
        featureImage: servicesPageMeta?.[0]?.featured_image_url
    }

    const servicesInfo = {
        title:  servicesPageMeta?.[0]?.acf.title,
        description:  servicesPageMeta?.[0]?.acf.description,
        serviceItem: servicesPageMeta?.[0]?.acf.services
    }

    const serviceProcessInfo ={
        bgImg: servicesPageMeta?.[0]?.acf.service_process.background_image,
        serviceItem: servicesPageMeta?.[0]?.acf.service_process.service_process_item,
    }

    return (
        <>
            <FeatureHeader featureHeaderContent={featureHeaderContent}/>
            <ServiceItem servicesInfo={servicesInfo}/>
            <Process serviceProcessInfo={serviceProcessInfo}/>
            <Cta/>
        </>

    );
}
