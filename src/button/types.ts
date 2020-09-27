import { ITheme } from '../types';
import { SIZE } from '../constants';

export interface IButtonProps {
  size?: SIZE;
}

export interface IFontStyleProps extends IButtonProps {
  theme: ITheme;
}
