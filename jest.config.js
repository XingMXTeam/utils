module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: false,
  coverageReporters: ["html"],
  coverageDirectory: "test/coverage/",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx,js,jsx}",
    "!src/index.tsx",
    "!src/utils/i18n.js",
    "!src/utils/request.js"
  ],
  transformIgnorePatterns: ["/!node_modules\\/lodash/"]
};
