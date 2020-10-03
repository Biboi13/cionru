// ANCHOR React
import React from 'react';

// ANCHOR Emotion
import { ThemeProvider } from 'emotion-theming';

// ANCHOR Theme
import { theme } from '../theme';

interface IProps {
  children: React.ReactNode;
}

export const CionProvider = ({ children }: IProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
