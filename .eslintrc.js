module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
      browser: true,
      node: true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
      'html'
  ],
  // add your custom rules here
  rules: {
      // don't require .vue extension when importing
      'import/extensions': ['error', 'always', {
          'js': 'never',
          'vue': 'never',
      }],
      // allow optionalDependencies
      'import/no-extraneous-dependencies': ['error', {
          'optionalDependencies': ['test/unit/index.js']
      }],

      // CUSTOM RULES

      // Change indent to 4 spaces
      'indent': ["warn", 4],

      // Disable no param reassign http://eslint.org/docs/rules/no-param-reassign
      'no-param-reassign': 0,

      // Adjust max line length
      'max-len': ["warn", 200],
  },
  globals: {}
}
