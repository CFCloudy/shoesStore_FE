/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        BASE_URL: process.env.BASE_URL,
        BASE_UPLOAD_URL: process.env.BASE_UPLOAD_URL
    },
    compiler: {
        styledComponents: true,
    },
    typescript: {
        ignoreBuildErrors: true
    },
    experimental: {
        outputStandalone: false,
        appDir:true
    },
    optimizeFonts: false,
    presets: ["next/babel"],
    trailingSlash: true,
}

module.exports = nextConfig