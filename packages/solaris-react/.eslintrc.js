// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  extends: ['prettier'],
  parserOptions: {
    project: ['./packages/web-components-react-wrapper/tsconfig.eslint.json'],
    tsconfigRootDir: path.resolve(__dirname, '../../'),
  },
};
