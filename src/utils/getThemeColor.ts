import { COLOR } from './constants';
import { ITheme } from './types';

export interface IColorStyleProps {
  theme: ITheme;
  isText?: boolean;
  isLighter?: boolean;
  color?: COLOR;
  shade?: 'main' | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700;
}

export function getThemeColor({
  theme,
  color,
  isText,
  shade = 'main',
}: IColorStyleProps) {
  switch (color) {
    case COLOR.accent:
      return isText ? theme.palette.accent.text : theme.palette.accent[shade];
    case COLOR.positive:
      return isText
        ? theme.palette.positive.text
        : theme.palette.positive[shade];
    case COLOR.negative:
      return isText
        ? theme.palette.negative.text
        : theme.palette.negative[shade];
    case COLOR.warning:
      return isText ? theme.palette.warning.text : theme.palette.warning[shade];
    default:
      return isText ? theme.palette.primary.text : theme.palette.primary[shade];
  }
}
