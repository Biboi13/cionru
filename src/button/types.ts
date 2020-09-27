import { ITheme } from '../utils/types';
import { SIZE } from '../utils/constants';

export interface IButtonProps {
  size?: SIZE;
}

export interface IFontStyleProps extends IButtonProps {
  theme: ITheme;
}
