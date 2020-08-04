import '@rushstack/eslint-patch/modern-module-resolution';

export default {
  plugins: ['flowtype'],
  extends: ['plugin:flowtype/recommended'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
};
