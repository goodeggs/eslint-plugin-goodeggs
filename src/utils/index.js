export const formatRuleName = ({prefix, pluginName, ruleName}) => {
  const formattedRuleName = `${pluginName}-${ruleName}`;
  if (prefix) {
    return `${prefix}/${formattedRuleName}`;
  }
  return formattedRuleName;
};

export const formatRules = (rules) => Object.entries(rules).reduce((acc, [name, value]) => {
  const [pluginName, ruleName] = name.split('/');
  const formattedRuleName = formatRuleName({prefix: 'goodeggs', pluginName, ruleName});
  acc[formattedRuleName] = value;
  return acc;
}, {});
