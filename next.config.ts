import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/attorneys",
        destination: "/our-attorneys",
        permanent: true,
      },
      {
        source: "/attorneys/justin-aronson",
        destination: "/our-attorneys/justin-aronson",
        permanent: true,
      },
      {
        source: "/attorneys/mitch-cornwell",
        destination: "/our-attorneys/mitchell-cornwell",
        permanent: true,
      },
      {
        source: "/Contact-Our-Office.shtml",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
