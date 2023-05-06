/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      "mezis.de",
      "www.fr.de",
      "www.forschung-und-lehre.de",
      "www.ernaehrungs-umschau.de",
      "www.buzzfeed.de",
      "cdn.businessinsider.de",
      "www.miz-babelsberg.de",
      "civio.es",
      "upload.wikimedia.org",
      "cdn.investigativedata.org",
    ].map((hostname) => ({
      protocol: "https",
      hostname,
      port: "",
      pathname: "**",
    })),
  },
};

module.exports = nextConfig;
