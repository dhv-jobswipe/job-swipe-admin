/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  images: {
    domains: ['localhost', process.env.NEXT_PUBLIC_API_URL]
      .filter(Boolean)
      .map((url) => url.replace(/https?:\/\//, '')),
  },
};

export default nextConfig;
