module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-navigation/|@react-native(-community)?|.*\\mjs$))',
  ],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  setupFilesAfterEnv: [
    '<rootDir>/test.setup.js',
    '@testing-library/jest-native/extend-expect',
  ],
};
