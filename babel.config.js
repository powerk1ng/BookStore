// babel.config.js
process.env.EXPO_ROUTER_APP_ROOT = './src/app';

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: { '@': './src', '@assets': './assets' },
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        },
      ],

      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './tamagui.config.ts',
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development',
        },
      ],

      'react-native-reanimated/plugin',
    ],
  };
};
