export const processCodeString = (
  code: string,
  stringToReplace: string,
  replacement: string,
) => {
  if (!replacement) return "";
  return code.replace(stringToReplace, replacement);
};
