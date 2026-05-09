import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // mermaid registers itself against window globals; transpile so Next's
  // pipeline can hand it to client components without ESM/CJS friction.
  transpilePackages: ['mermaid'],
  // Pin the workspace root so Turbopack does not silently pick up a stray
  // lockfile from a parent directory during local development or CI.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
