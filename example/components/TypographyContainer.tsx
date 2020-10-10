// ANCHOR React
import * as React from 'react';

// ANCHOR Cionru
import {
  HeadingXXLarge,
  HeadingXLarge,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingXSmall,
} from '../../dist';

// ANCHOR Components
import { Container } from './Container';

export const TypographyContainer = () => (
  <Container>
    <HeadingXXLarge>
      Heading XXLarge
    </HeadingXXLarge>
    <HeadingXLarge>
      Heading XLarge
    </HeadingXLarge>
    <HeadingLarge>
      Heading Large
    </HeadingLarge>
    <HeadingMedium>
      Heading Medium
    </HeadingMedium>
    <HeadingSmall>
      Heading Small
    </HeadingSmall>
    <HeadingXSmall>
      Heading XSmall
    </HeadingXSmall>
  </Container>
);
