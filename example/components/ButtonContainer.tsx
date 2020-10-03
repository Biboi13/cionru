// ANCHOR React
import * as React from 'react';

// ANCHOR Cionru
import {
  Button, SIZE, KIND, COLOR, styled,
} from '../../.';

// ANCHOR Components
import { Container } from './Container';

const Box = styled.span({
  marginLeft: '16px',
  marginRight: '16px',
});

export const ButtonContainer = () => (
  <div>
    <Container>
      <Box>
        <Button size={SIZE.mini}>
          Mini
        </Button>
      </Box>
      <Box>
        <Button size={SIZE.small}>
          Small
        </Button>
      </Box>
      <Box>
        <Button size={SIZE.default}>
          Default
        </Button>
      </Box>
      <Box>
        <Button size={SIZE.large}>
          Large
        </Button>
      </Box>
    </Container>
    <Container>
      <Box>
        <Button kind={KIND.primary}>
          Primary
        </Button>
      </Box>
      <Box>
        <Button kind={KIND.secondary}>
          Secondary
        </Button>
      </Box>
      <Box>
        <Button kind={KIND.minimal}>
          Minimal
        </Button>
      </Box>
      <Box>
        <Button kind={KIND.outline}>
          Outline
        </Button>
      </Box>
      <Box>
        <Button kind={KIND.link}>
          Link
        </Button>
      </Box>
    </Container>
    <Container>
      <Box>
        <Button color={COLOR.primary}>
          Primary
        </Button>
      </Box>
      <Box>
        <Button color={COLOR.accent}>
          Accent
        </Button>
      </Box>
      <Box>
        <Button color={COLOR.warning}>
          Warning
        </Button>
      </Box>
      <Box>
        <Button color={COLOR.positive}>
          Positive
        </Button>
      </Box>
      <Box>
        <Button color={COLOR.negative}>
          Negative
        </Button>
      </Box>
    </Container>
  </div>
);
