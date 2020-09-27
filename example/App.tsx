// ANCHOR React
import * as React from 'react';

// ANCHOR Cionru
import { CionruThemeProvider } from '../.';

// ANCHOR Components
import { Button } from './components/Button';

export const App = () => (
  <div>
    <CionruThemeProvider>
      <Button />
    </CionruThemeProvider>
  </div>
);
