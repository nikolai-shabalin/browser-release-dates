export const normalizeBrowserVersion = (version) => {
  if (typeof version !== 'string') {
      throw new Error('Version must be a string');
  }

  const [major, minor] = version.split('.');

  if (minor === '0') {
      return major;
  }

  return version;
}
