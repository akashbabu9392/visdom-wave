/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  transpilePackages: ['swiper', 'ssr-window', 'dom7'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'swiper/react': 'swiper/react',
      'swiper': 'swiper',
    };
    return config;
  },
};

module.exports = nextConfig;
