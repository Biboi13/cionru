// ANCHOR Styles
import styled from '@emotion/styled';

// ANCHOR Types
import { ITheme } from '../utils/types';
import {
  IButtonProps,
  IFontStyleProps,
  IColorStyleProps,
  ISpacingStyleProps,
  IBorderStyleProps,
} from './types';

// ANCHOR Theme
import { theme as defaultTheme } from '../utils/theme';

// ANCHOR Utils
import { getThemeColor } from '../utils/getThemeColor';
import { isObjectEmpty } from '../utils/isObjectEmpty';

// ANCHOR Constants
import { COLOR, KIND, SIZE } from '../utils/constants';

export const Button = styled.button<IButtonProps, ITheme>(
  {
    border: 'none',
    borderRadius: defaultTheme.spacing[50],
  },
  ({
    theme,
    size = SIZE.default,
    color = COLOR.primary,
    kind = KIND.primary,
  }) => {
    if (isObjectEmpty(theme)) {
      theme = defaultTheme;
    }

    return {
      transitionTimingFunction: 'cubic-bezier(0, 0, 1, 1)',
      transitionDuration: '200ms',
      transitionProperty: 'background',

      ...getSpacingStyles({ theme, size }),
      ...getFontStyles({ theme, size }),
      ...getColorStyles({ theme, color, kind }),
      ...getBorderStyles({ theme, color, size, kind }),

      '&:hover, &:focus, &:active': {
        ...getHoverColorStyles({ theme, color, kind }),
      },

      '&:focus': {
        outline: 0,
      },
    };
  }
);

function getSpacingStyles({ theme, size }: ISpacingStyleProps) {
  switch (size) {
    case SIZE.mini:
      return {
        padding: `${theme.spacing[50]} ${theme.spacing[100]}`,
      };
    case SIZE.small:
      return {
        padding: `${theme.spacing[125]} ${theme.spacing[150]}`,
      };
    case SIZE.large:
      return {
        padding: `${theme.spacing[225]} ${theme.spacing[300]}`,
      };
    default:
      return {
        padding: `${theme.spacing[175]} ${theme.spacing[225]}`,
      };
  }
}

function getFontStyles({ theme, size }: IFontStyleProps) {
  switch (size) {
    case SIZE.mini:
      return theme.typography[200];
    case SIZE.small:
      return theme.typography[300];
    case SIZE.large:
      return theme.typography[500];
    default:
      return theme.typography[400];
  }
}

function getColorStyles({ theme, color, kind }: IColorStyleProps) {
  switch (kind) {
    case KIND.secondary:
      return {
        color: getThemeColor({ theme, color }),
        backgroundColor: getThemeColor({ theme, color, shade: 50 }),
      };
    case KIND.minimal:
      return {
        color: getThemeColor({ theme, color }),
        background: 'none',
      };
    case KIND.outline:
      return {
        color: getThemeColor({ theme, color }),
        background: 'none',
      };
    case KIND.link:
      return {
        color: getThemeColor({ theme, color }),
        background: 'none',
        textDecoration: 'underline',
      };
    default:
      return {
        color: getThemeColor({ theme, color, isText: true }),
        backgroundColor: getThemeColor({ theme, color }),
      };
  }
}

function getHoverColorStyles({ theme, color, kind }: IColorStyleProps) {
  switch (kind) {
    case KIND.secondary:
      return {
        backgroundColor: getThemeColor({ theme, color, shade: 100 }),
      };
    case KIND.minimal:
      return {
        background: getThemeColor({ theme, color, shade: 50 }),
      };
    case KIND.outline:
      return {
        background: getThemeColor({ theme, color, shade: 50 }),
      };
    case KIND.link:
      return {
        color: getThemeColor({ theme, color, shade: 200 }),
        background: 'none',
        textDecoration: 'underline',
      };
    default:
      return {
        backgroundColor: getThemeColor({
          theme,
          color,
          shade: color === COLOR.primary ? 600 : 300,
        }),
      };
  }
}

function getBorderStyles({ theme, kind, size, color }: IBorderStyleProps) {
  const commonBorderStyles = {
    borderStyle: 'solid',
    borderColor: getThemeColor({ theme, color }),
  };

  if (kind === KIND.outline) {
    switch (size) {
      case SIZE.mini:
        return {
          ...commonBorderStyles,
          borderWidth: '1px',
        };
      case SIZE.small:
        return {
          ...commonBorderStyles,
          borderWidth: '1.5px',
        };
      case SIZE.large:
        return {
          ...commonBorderStyles,
          borderWidth: '4px',
        };
      default:
        return {
          ...commonBorderStyles,
          borderWidth: '2px',
        };
    }
  }

  return null;
}
