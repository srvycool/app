import 'styled-components';
import { Theme } from '@srvycool/ds/dist/theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
