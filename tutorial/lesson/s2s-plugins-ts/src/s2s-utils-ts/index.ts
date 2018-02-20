import {  getImportPath as origGetImportPath } from 's2s-utils';

export const getImportPath = (from: string, to: string) => {
  const path = origGetImportPath(from, to);
  const formatted = path.replace(/\.\w+$/, '');
  if (!/^\.\.?/.test(formatted)) {
    return `./${formatted}`;
  }
  return formatted;
};
