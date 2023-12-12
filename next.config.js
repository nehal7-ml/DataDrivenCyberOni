/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com","placehold.co","images.unsplash.com", "res.cloudinary.com", "picsum.photos"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/TechWithTy/DataDrivenCyberOni",
        permanent: true,
      },
      {
        source: "/support",
        destination: "https://form.jotform.com/233444925421050",
        permanent: true,
      },
      {
        source: "/schedule",
        destination: "https://calendly.com/cyberoni/quick-zoom-meeting",
        permanent: true,
      },
    ];
  },
  experimental: {
    serverActions: true,

  }
};

module.exports = nextConfig;
