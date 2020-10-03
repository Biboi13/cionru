// ANCHOR React
import * as React from 'react';

// ANCHOR Cionru
import { CionProvider } from '../.';

// ANCHOR Components
import { ButtonContainer } from './components/ButtonContainer';

export const App = () => (
  <div>
    <CionProvider>
      <ButtonContainer />
    </CionProvider>
  </div>
);
