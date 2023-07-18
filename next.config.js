/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["images.unsplash.com", "source.unsplash.com", "placekitten.com", "flipkart.com", "ukminim1.flixcart.com", "rukminim1.flixcart.com", "picsum.photos"],
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