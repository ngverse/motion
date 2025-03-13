export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['animatecss', 'general']],
    'scope-empty': [0, 'always'], // 0 disables the rule, making scope optional
  },
};
