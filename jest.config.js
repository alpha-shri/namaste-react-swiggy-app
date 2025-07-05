export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "^.+\\.css$": "jest-css-modules",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.(js|jsx|ts|tsx)",
    "<rootDir>/src/**/*.(test|spec).(js|jsx|ts|tsx)",
  ],
};
