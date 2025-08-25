export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL; // make sure the env variable starts with NEXT_PUBLIC_

export const HOME_API_ENDPOINTS = {
    HOME_PAGE: `${BASE_URL}/wp-json/wp/v2/pages?slug=home`,
    SPECIALIZED_NEWS: `${BASE_URL}/wp-json/wp/v2/specialized-news`,
};

export const BLOG_API_ENDPOINTS = {
    ALL_BLOG: `${BASE_URL}/wp-json/wp/v2/posts`,
    SINGLE_BLOG: `${BASE_URL}/wp-json/wp/v2/posts`,
};
