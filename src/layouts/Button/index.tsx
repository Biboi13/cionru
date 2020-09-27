// ANCHOR Styles
import styled from '@emotion/styled';

interface IProps {
  fontSize: string;
}

export const Button = styled.button(
  {
    background: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    border: '4px solid #141414',

    '&:hover': {
      color: 'red',
    },
  },
  (props: IProps) => ({
    fontSize: props.fontSize,
  })
);
