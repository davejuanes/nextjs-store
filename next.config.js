// const withPWA = require('next-pwa')

/* module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disabled: false,
  },
    reactStrictMode: true,
    images: {
      domains: ['placeimg.com', 'api.lorem.space', 'www.elitecrafters.com', 'img.freepik.com', 'picsum.photos', 'i.pinimg.com', 'assets.adidas.com', 'firebasestorage.googleapis.com', 'store.storeimages.cdn-apple.com', 'empresas.blogthinkbig.com'],
    },
}) */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space', 'www.elitecrafters.com', 'img.freepik.com', 'picsum.photos', 'i.pinimg.com', 'assets.adidas.com', 'firebasestorage.googleapis.com', 'store.storeimages.cdn-apple.com', 'empresas.blogthinkbig.com'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});

module.exports = withPWA(nextConfig);