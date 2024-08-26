import { allBrowser } from './browsers/allBrowsers.js';
import { normalizeBrowserVersion } from './utils.js';

export const getBrowserReleaseDate = (browserName, version) => {
  const normalizeBrowserName  = browserName.toLowerCase();
  const normalizeBrowserVerion = normalizeBrowserVersion(version);
  const browserData = allBrowser?.[normalizeBrowserName]?.[normalizeBrowserVerion];

  if (browserData) {
      return browserData;
  } else {
      return `Release date not found for ${browserName} version ${version}`;
  }
}
