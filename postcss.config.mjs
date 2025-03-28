/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    'postcss-preset-env': {
      features: { 'custom-properties': false },
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
