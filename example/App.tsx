// ANCHOR React
import * as React from 'react';

// ANCHOR Cionru
import { CionruThemeProvider } from '../.';

// ANCHOR Components
import { ButtonContainer } from './components/ButtonContainer';

export const App = () => (
  <div>
    <CionruThemeProvider>
      <ButtonContainer />
    </CionruThemeProvider>
  </div>
);
