/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$|\.md?$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
});
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
