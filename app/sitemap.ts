import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap{
    return [
        {
            url: 'https://insulation-site-v.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://insulation-site-v.vercel.app/#services',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://insulation-site-v.vercel.app/#contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
}