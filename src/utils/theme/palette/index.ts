import { accent } from './accent';
import { primary } from './primary';
import { positive } from './positive';
import { negative } from './negative';
import { warning } from './warning';

const white = '#fff';
const black = '#111';

export const palette = {
  common: {
    white,
    black,
  },
  ...accent,
  ...primary,
  ...positive,
  ...negative,
  ...warning,
};
