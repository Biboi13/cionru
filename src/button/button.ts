// ANCHOR Styles
import styled from '@emotion/styled';

// ANCHOR Types
import { ITheme } from '../types';
import { IButtonProps, IFontStyleProps } from './types';

// ANCHOR Theme
import { theme as defaultTheme } from '../theme';

// ANCHOR Utils
import { isObjectEmpty } from '../utils/isObjectEmpty';

// ANCHOR Constants
import { SIZE } from '../constants';

export const Button = styled.button<IButtonProps, ITheme>(
  {
    background: 'none',
    borderRadius: '4px',
    border: '4px solid #141414',

    '&:hover': {
      color: 'red',
    },
  },
  ({ theme, size }) => {
    if (isObjectEmpty(theme)) {
      theme = defaultTheme;
    }

    return {
      ...getSizeStyles({ theme, size }),
    };
  }
);

function getSizeStyles({ theme, size }: IFontStyleProps) {
  switch (size) {
    case SIZE.mini:
      return { padding: `${theme.spacing.scale25} ${theme.spacing.scale25}` };
    case SIZE.small:
      return { padding: `${theme.spacing.scale50} ${theme.spacing.scale50}` };
    case SIZE.large:
      return { padding: `${theme.spacing.scale100} ${theme.spacing.scale200}` };
    default:
      return { padding: `${theme.spacing.scale50} ${theme.spacing.scale100}` };
  }
}
