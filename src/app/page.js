// src/app/page.jsx
export const dynamic = 'force-dynamic';

import Slider from "@/components/home/Slider";
import Experience from "@/components/home/Experience";
import RecentWorks from "@/components/home/RecentWorks";
import Testimonials from "@/components/home/Testimonials";
import Partners from "@/components/common/Partners";
import SpecializedNews from "@/components/home/SpecializedNews";


async function getHomePageData() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/pages?slug=home`, {
            cache: 'no-store', // optional, prevents caching during dev
        });
        const homePageMeta = await res.json();
        return homePageMeta;
    } catch (error) {
        console.error(error);
        return null;
    }
}
async function getSpecializedNews() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/specialized-news`, {
            cache: 'no-store', // optional, prevents caching during dev
        });
        const specializedNews = await res.json();
        return specializedNews;
    } catch (error) {
        console.error(error);
        return null;
    }
}
async function getWorkCategories() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/work-category`, {
            cache: 'no-store', // optional, prevents caching during dev
        });
        const workCategories = await res.json();
        return workCategories;
    } catch (error) {
        console.error(error);
        return null;
    }
}
async function getRecentWorks() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/recent-works`, {
            cache: 'no-store', // optional, prevents caching during dev
        });
        const recentWorks = await res.json();
        return recentWorks;
    } catch (error) {
        console.error(error);
        return null;
    }
}


export default async function Home() {

    const homePageData = await getHomePageData();
    const specializedNews = await getSpecializedNews();
    const workCategories = await getWorkCategories();
    const recentWorks = await getRecentWorks();

    const sliderData = homePageData?.[0]?.acf?.home_banner_slider || [];
    const experienceData = homePageData?.[0]?.acf?.experience_section || {};
    const testimonialsData = homePageData?.[0]?.acf?.testimonial_section || {};
    const partners = homePageData?.[0]?.acf?.partners || {};
    const specializedNewsInfo = homePageData?.[0]?.acf?.specialized_news || [];

    return (
          <>
              <Slider sliderData={sliderData} />
              <Experience experienceData={experienceData}/>
              <RecentWorks workCategories={workCategories} recentWorks={recentWorks}/>
              <Testimonials testimonialsData={testimonialsData}/>
              <Partners partners={partners}/>
              <SpecializedNews specializedNewsInfo={specializedNewsInfo} specializedNews={specializedNews}/>
          </>
    );
}
