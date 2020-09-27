// ANCHOR React
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// ANCHOR Components
import { Button } from '.';

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button fontSize="14px" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
