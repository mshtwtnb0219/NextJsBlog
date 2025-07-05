import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 🔑 ここが超重要！
  transpilePackages: ['@prisma/client'],

  // 外部画像扱う場合は追記が必要
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  // デフォルトが1MB
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb', // 必要に応じて値を変更 
    },
  },
};

export default nextConfig;
