// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // generate static HTML (needed for InfinityFree hosting)
  images: {
    unoptimized: true, // disable Next.js image optimization (InfinityFree doesn’t support Node)
  },
};

export default nextConfig;
