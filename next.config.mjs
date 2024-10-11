/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port:""
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port:""
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                port:""
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port:""
            }
        ],
    },
};

export default nextConfig;
