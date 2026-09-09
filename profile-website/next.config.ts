import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const nextConfig: NextConfig = isGitHubPages
  ? {
      output: 'export',
      assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/rohan-kuttappa',
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};
export default nextConfig;
