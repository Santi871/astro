/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.astrobin.com',
                port: '',
                pathname: '/thumbs/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.discordapp.com',
                port: '',
                pathname: '/attachments/**',
            }
        ]
    }
};

export default nextConfig;
