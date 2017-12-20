// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    "node": true,
    "es6": true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html',
    "react",
    "jsx-a11y"
  ],
  "parserOptions":
    { "ecmaFeatures":
      { "experimentalObjectRestSpread": true,
        "jsx": true,
        "arrowFunctions": true,
        "classes": true,
        "modules": true,
        "defaultParams": true
      },
      "sourceType": "module" },
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    "linebreak-style":0,
    "class-methods-use-this":0,
    "no-console":0,
    "no-unused-vars": 0,
    "prefer-const":0,
    // don't require .vue extension when importing
    'import/extensions': 0,
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'react/jsx-no-undef':1,
    'semi': [
      'error',
      'never'
    ]
  }
}
