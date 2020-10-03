import { ITheme } from '../utils/types';
import { SIZE, KIND, COLOR } from '../utils/constants';

interface IButtonBaseProps {
  theme: ITheme;
}

export interface IButtonProps {
  size?: SIZE;
  color?: COLOR;
  kind?: KIND;
}

export interface ISpacingStyleProps extends IButtonBaseProps {
  size: SIZE;
}

export interface IFontStyleProps extends IButtonBaseProps {
  size: SIZE;
}

export interface IColorStyleProps extends IButtonBaseProps {
  kind: KIND;
  color: COLOR;
}

export interface IBorderStyleProps extends IButtonBaseProps {
  kind: KIND;
  size: SIZE;
  color: COLOR;
}
