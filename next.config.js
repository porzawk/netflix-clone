/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/w500/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/movies/now_playing",
        permanent: true,
      },
    ];
  },
};
