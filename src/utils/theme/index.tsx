// ANCHOR React
import React from 'react';

// ANCHOR Theme
import { spacing } from './spacing';
import { typography } from './typography';

// ANCHOR Emotion
import { ThemeProvider } from 'emotion-theming';

export const theme = {
  spacing,
  typography,
};

interface IProps {
  children: React.ReactNode;
}

export const CionruThemeProvider = ({ children }: IProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
