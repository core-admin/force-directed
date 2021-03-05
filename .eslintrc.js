module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    L: true
  },
  rules: {
    'vue/custom-event-name-casing': 'off',
    'vue/no-unused-vars': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': 1,
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    // 要求使用剩余参数 而不是arguments
    'prefer-rest-params': 'warn',

    'comma-dangle': ['error', 'never'],
    'prettier/prettier': [
      'warn',
      {}, // prettier规则 同.prettierrc.json中的配置
      {
        usePrettierrc: true
      }
    ],
    // @fixable 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') }
    'block-spacing': ['error', 'always'],
    // @fixable 对象字面量只有一行时，大括号内的首尾必须有空格
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: false
      }
    ],
    // @fixable function 的小括号之前必须要有空格
    'space-before-function-paren': [
      'off',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    // @fixable 禁止出现超过三行的连续空行
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1,
        maxBOF: 1
      }
    ]
  }
}
