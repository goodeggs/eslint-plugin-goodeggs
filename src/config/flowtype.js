import '@rushstack/eslint-patch/modern-module-resolution';

export default {
  plugins: ['flowtype', 'prettier'],
  extends: ['plugin:flowtype/recommended', 'prettier/flowtype'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
};
