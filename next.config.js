/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["images.unsplash.com", "absa7kzimnaf.blob.core.windows.net", "source.unsplash.com", "placekitten.com", "flipkart.com", "ukminim1.flixcart.com", "rukminim1.flixcart.com", "picsum.photos", "plus.unsplash.com"],
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
            }));
        return config;
    }
}

module.exports = nextConfig