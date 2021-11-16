export default {
  plugins: ['flowtype'],
  extends: ['plugin:flowtype/recommended'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
};
