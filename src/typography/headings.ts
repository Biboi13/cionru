// ANCHOR Styles
import styled from '@emotion/styled';

// ANCHOR Types
import { ITheme } from '../utils/types';
import { ITypographyProps } from './types';

// ANCHOR Theme
import { theme as defaultTheme } from '../utils/theme';

// ANCHOR Utils
import { getThemeColor } from '../utils/getThemeColor';
import { isObjectEmpty } from '../utils/isObjectEmpty';

// ANCHOR Constants
import { COLOR } from '../utils/constants';

export const HeadingXXLarge = styled.h1<ITypographyProps, ITheme>(
  {
    ...defaultTheme.typography[1000],
  },
  ({ theme, color = COLOR.primary }) => {
    if (isObjectEmpty(theme)) {
      theme = defaultTheme;
    }

    return {
      color: getThemeColor({ theme, color }),
    };
  }
);

export const HeadingXLarge = styled.h2<ITypographyProps, ITheme>(
  {
    ...defaultTheme.typography[900],
  },
  ({ theme, color = COLOR.primary }) => {
    if (isObjectEmpty(theme)) {
      theme = defaultTheme;
    }

    return {
      color: getThemeColor({ theme, color }),
    };
  }
);

export const HeadingLarge = styled.h3<ITypographyProps, ITheme>(
  {
    ...defaultTheme.typography[800],
  },
  ({ theme, color = COLOR.primary }) => {
    if (isObjectEmpty(theme)) {
      theme = defaultTheme;
    }

    return {
      color: getThemeColor({ theme, color }),
    };
  }
);

export const HeadingMedium = styled.h4<ITypographyProps, ITheme>(
  {
    ...defaultTheme.typography[700],
  },
  ({ theme, color = COLOR.primary }) => {
    if (isObjectEmpty(theme)) {
      theme = defaultTheme;
    }

    return {
      color: getThemeColor({ theme, color }),
    };
  }
);

export const HeadingSmall = styled.h5<ITypographyProps, ITheme>(
  {
    ...defaultTheme.typography[600],
  },
  ({ theme, color = COLOR.primary }) => {
    if (isObjectEmpty(theme)) {
      theme = defaultTheme;
    }

    return {
      color: getThemeColor({ theme, color }),
    };
  }
);

export const HeadingXSmall = styled.h6<ITypographyProps, ITheme>(
  {
    ...defaultTheme.typography[550],
  },
  ({ theme, color = COLOR.primary }) => {
    if (isObjectEmpty(theme)) {
      theme = defaultTheme;
    }

    return {
      color: getThemeColor({ theme, color }),
    };
  }
);
