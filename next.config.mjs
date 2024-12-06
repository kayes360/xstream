/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ytimg.com',
            pathname: '/**', // Accept any path under this domain
          },
        ],
      },
};

export default nextConfig;
