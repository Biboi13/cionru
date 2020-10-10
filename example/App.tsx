// ANCHOR React
import * as React from 'react';

// ANCHOR Cionru
import { CionProvider } from '../dist';

// ANCHOR Components
import { ButtonContainer } from './components/ButtonContainer';
import { TypographyContainer } from './components/TypographyContainer';

export const App = () => (
  <div>
    <CionProvider>
      <ButtonContainer />
      <TypographyContainer />
    </CionProvider>
  </div>
);
