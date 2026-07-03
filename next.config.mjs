/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  /* config options here */
  output: "export",
  reactCompiler: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
