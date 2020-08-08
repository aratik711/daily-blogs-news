const process = require('process');
const path = require('path');
const fs = require('fs');
// language=markdown
const template = `# Readme test
Post list example:
<!-- BLOG-LIST:START -->
<!-- BLOG-LIST:END -->

# Other contents
Test content
`;
fs.writeFile(path.join(__dirname, 'test', 'Readme.md'), template, () => {
    console.log("Written test file....");
    process.env.INPUT_MAX_POST_COUNT = "5";
    process.env.INPUT_FEED_LIST = "http://localhost:8080";
    process.env.INPUT_README_PATH = path.join(__dirname, 'test', 'Readme.md');
    process.env.INPUT_DISABLE_SORT = "false";
    process.env.INPUT_TEMPLATE = "default";
    process.env.TEST_MODE = "true";
    const testFile = process.env.DIST ? './dist/daily-blogs-news' :'./daily-blogs-news';
    console.log('Testing: ', testFile);
    require(testFile);
});

