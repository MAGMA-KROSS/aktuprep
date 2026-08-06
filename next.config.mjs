/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'localhost:3000',
    '192.168.1.3',
    '192.168.1.3:3000',
    '192.168.1.5',
    '192.168.1.5:3000',
    '192.168.1.6',
    '192.168.1.6:3000'
  ],
  async rewrites() {
    return [
      {
        source: '/pyps',
        destination: '/pyqs',
      },
    ];
  },
};

export default nextConfig;

