module.exports = {
    preset: "ts-jest",
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file-mock.js",
        "\\.(css|less)$": "<rootDir>/__mocks__/style-mock.js"
    },
    modulePaths: ["<rootDir>/src"],
    moduleFileExtensions: ["ts", "js", "json"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testPathIgnorePatterns: ["<rootDir>/.cache", "<rootDir>/node_modules", "<rootDir>/dist"],
}
