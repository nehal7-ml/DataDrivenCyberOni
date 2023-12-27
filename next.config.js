/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    dangerouslyAllowSVG:true,
    domains: ["lh3.googleusercontent.com", "vercel.com","placehold.co","images.unsplash.com", "res.cloudinary.com", "picsum.photos","api.dicebear.com"],
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
      {
        source: "/apply/full-stack",
        destination: "https://form.jotform.com/233470488980164",
        permanent: true,
      },
      {
        source: "/hire-a-dev",
        destination: "https://form.jotform.com/233471176876163",
        permanent: true,
      },
    ];
  },
  experimental: {
    serverActions: true,

  }
};

module.exports = nextConfig;
