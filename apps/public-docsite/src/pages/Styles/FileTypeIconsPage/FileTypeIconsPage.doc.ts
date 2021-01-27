import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';

const title = 'File Type Icons';
const related = require('!raw-loader?esModule=false!@fluentui/public-docsite/src/pages/Styles/FileTypeIconsPage/docs/FileTypeIconsRelated.md') as string;
const componentUrl =
  'https://github.com/microsoft/fluentui/tree/master/apps/public-docsite/src/pages/Styles/FileTypeIconsPage';

export const FileTypeIconsPageProps: TFabricPlatformPageProps = {
  web: {
    title,
    related,
    componentUrl,
  },
};
